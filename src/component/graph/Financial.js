import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Total Income", "Total Expenses", "Total Balance"],
  datasets: [
    {
      label: "Financial Data",
      data: [300, 250, 100],
      backgroundColor: ["#FF8C00", "#E74C3C", "#6A5ACD"],
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

const FinancialChart = () => {
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
          paddingLeft:10,
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
