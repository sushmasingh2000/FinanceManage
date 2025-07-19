import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { apiConnectorGet } from "../../utils/APIConnector";
import { endpoint } from "../../utils/APIRoutes";
import { useQuery } from "react-query";

ChartJS.register(ArcElement, Tooltip, Legend);



const FinancialChart = () => {
const { data: graph } = useQuery(
  ["get_dashboard"],
  () => apiConnectorGet(endpoint?.get_dashboard),
  {
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    onError: (err) => console.error("Error fetching income data:", err),
  }
);

const allData = graph?.data?.response?.[0]?.data?.[0] || {};

const data = {
  labels: ["Total Balance", "Total Income", "Total Expenses"],
  datasets: [
    {
      label: "Financial Data",
      data: [
        parseFloat(allData?.net_amount || 0).toFixed(2),
        parseFloat(allData?.total_cr || 0).toFixed(2),
        parseFloat(allData?.total_dr || 0).toFixed(2),
      ],
      backgroundColor: ["#6A5ACD", "#2ECC71", "#E74C3C"],
      hoverOffset: 30,
      borderWidth: 2,
      borderColor: "#fff",
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
        enabled: true,
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
  return (
    <div
      style={{
        position: "relative",
        width: 450,
        margin: "0 auto",
        padding: 40,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        borderRadius: 12,
        backgroundColor: "#fff",
      }}
    >
      <h2
        style={{
          position: "absolute",
          top: 16,
          left: 0,
          margin: 0,
          fontSize: 18,
          paddingLeft: 10,
          fontWeight: "600",
          color: "#333",
          userSelect: "none",
        }}
      >
        Financial Overview
      </h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default FinancialChart;
