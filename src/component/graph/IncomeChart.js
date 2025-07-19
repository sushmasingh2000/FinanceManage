import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { endpoint } from "../../utils/APIRoutes";
import { apiConnectorGet } from "../../utils/APIConnector";
import { useQuery, useQueryClient } from "react-query";
import { useFormik } from "formik";

ChartJS.register(ArcElement, Tooltip, Legend);



const IncomeChart = () => {
  const { data: expense } = useQuery(
    ["get_dashboard_finance", "Cr"],
    () => apiConnectorGet(`${endpoint?.get_dashboard_finance_data}?type=Cr`),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      onError: (err) => console.error("Error fetching income data:", err),
    }
  );

  const allData = expense?.data?.response || [];

  const data = {
    labels: allData?.map((i) => i?.ldg_source || "") || ["", ""],
    datasets: [
      {
        label: "Income",
        data: allData?.map((i) => Number(i?.cr_amount || 0)) || [],
        backgroundColor: [
          "#6A5ACD",
          "#E74C3C",
          "#FFA500",
          "#4B0082",
          "#2E8B57",
        ],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const value = context.parsed || 0;
            return `${label}: ₹${value.toLocaleString()}`;
          },
        },
      },
    },
  };
  const totalIncome = data.datasets[0].data.reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h3 className="font-semibold text-lg mb-4">Last 60 Days Income</h3>
      <Pie data={data} options={options} />
      <div className="text-center font-bold text-xl mt-4">
        Total Income <br />
        ₹ {totalIncome.toLocaleString()}
      </div>
    </div>
  );
};

export default IncomeChart;
