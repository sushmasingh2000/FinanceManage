
import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useQuery } from "react-query";
import { apiConnectorGet } from "../../utils/APIConnector";
import { endpoint } from "../../utils/APIRoutes";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);



const ExpenseChart = () => {
  const { data: expense } = useQuery(
    ["get_dashboard_finnace"],
    () => apiConnectorGet(`${endpoint?.get_dashboard_finance_data}?type=Dr`),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      onError: (err) => console.error("Error fetching income data:", err),
    }
  );

  const allData = expense?.data?.response|| [];

  const data = {
    labels:allData?.map((i)=>i?.ldg_source||"")||["",""],
    datasets: [
      {
        label: "Amount",
        data: allData?.map((i)=>Number(i?.dr_amount||0))||[],
        backgroundColor: "#ff0000",
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-md">
      <h3 className="font-semibold text-lg mb-4">Last 30 Days Expenses</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ExpenseChart;
