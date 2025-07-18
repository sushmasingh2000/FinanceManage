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

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const data = {
  labels: [
    "1st Jan", "4th Jan", "6th Jan", "7th Jan", "8th Jan", "9th Jan",
    "10th Jan", "11th Jan", "13th Jan", "12th Feb", "19th Feb"
  ],
  datasets: [
    {
      label: "Income",
      data: [5000, 9200, 10500, 9200, 1500, 9200, 14000, 11900, 8000, 12000, 9500],
      backgroundColor: "#15803d",
      borderRadius: 6,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false, // <-- important to allow height control
  plugins: {
    legend: { display: false },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const IncomeBarChart = () => {
  return (
    <div className="bg-white p-6 rounded shadow w-full" style={{ height: "300px", width: "100%" }}>
      <h3 className="text-lg font-semibold mb-4">Income Overview</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default IncomeBarChart;
