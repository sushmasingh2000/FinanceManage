import React from "react";
import { useQuery } from "react-query";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Area,
} from "recharts";
import { apiConnectorGet } from "../../../utils/APIConnector";
import { endpoint } from "../../../utils/APIRoutes";
import moment from "moment";

const ExpenseOverview = () => {


const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { label, amount } = payload[0].payload;
    return (
      <div className="bg-white border shadow px-4 py-2 rounded text-sm text-gray-700">
        <p className="font-semibold">{label || "Expense"}</p>
        <p>Amount: ₹{amount
          
          }</p>
      </div>
    );
  }
  return null;
};

   const { data: expense } = useQuery(
      ["get_expense"],
          () => apiConnectorGet(`${endpoint?.get_user_income_graph}?income_type=Dr`),
      {
        keepPreviousData: true,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        onError: (err) => console.error("Error fetching expense data:", err),
      }
    );
  
    const allData = expense?.data?.response || [];
    const data =
    allData?.map((i)=>{
      return {
        date:moment(i?.ldg_createdAt)?.format("DD-MM-YYYY"),
        amount:i?.total_dr
      }
    })

  return (
    <div className="bg-white p-6 rounded shadow w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Expense Overview</h3>
        
      </div>

      <p className="text-gray-500 text-sm mb-6">
        Track your spending trends over time and gain insights into where your money goes.
      </p>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <defs>
            <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#34D399" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#34D399" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="amount"
            stroke="#10B981"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Area
            type="monotone"
            dataKey="amount"
            stroke="none"
            fill="url(#greenGradient)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseOverview;
