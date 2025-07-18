
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

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: ["Shopping", "Travel", "Electricity", "Loan"],
  datasets: [
    {
      label: "Amount",
      data: [430, 670, 200, 600],
      backgroundColor: "#15803d",
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

const ExpenseChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="font-semibold text-lg mb-4">Last 30 Days Expenses</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ExpenseChart;
