import React from "react";
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

const data = [
  { date: "2nd Jan", amount: 500, label: "Groceries" },
  { date: "3rd Jan", amount: 200 },
  { date: "4th Jan", amount: 100 },
  { date: "5th Jan", amount: 250, label: "Groceries" },
  { date: "6th Jan", amount: 50 },
  { date: "7th Jan", amount: 400 },
  { date: "9th Jan", amount: 300 },
  { date: "10th Jan", amount: 700 },
  { date: "11th Jan", amount: 800 },
  { date: "12th Jan", amount: 650 },
  { date: "14th Jan", amount: 200 },
  { date: "10th Feb", amount: 500 },
  { date: "11th Feb", amount: 250 },
  { date: "17th Feb", amount: 400 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { label, amount } = payload[0].payload;
    return (
      <div className="bg-white border shadow px-4 py-2 rounded text-sm text-gray-700">
        <p className="font-semibold">{label || "Expense"}</p>
        <p>Amount: ${amount}</p>
      </div>
    );
  }
  return null;
};

const ExpenseOverview = () => {
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
