import React from "react";
import { FiTrendingUp } from "react-icons/fi";

const incomeData = [
  { icon: "🏗️", label: "Freelance Development", date: "19th Feb 2025", amount: "+ $5000" },
  { icon: "🏦", label: "Interest from Savings", date: "13th Jan 2025", amount: "+ $9600" },
  { icon: "🎨", label: "Graphic Design", date: "10th Jan 2025", amount: "+ $10500" },
  { icon: "🎵", label: "YouTube Revenue", date: "8th Jan 2025", amount: "+ $1500" },
  { icon: "📉", label: "Stock Market", date: "6th Jan 2025", amount: "+ $9200" },
  { icon: "👨‍💼", label: "Salary", date: "12th Feb 2025", amount: "+ $12000" },
  { icon: "🛍️", label: "E-commerce Sales", date: "11th Jan 2025", amount: "+ $11900" },
  { icon: "📢", label: "Affiliate Marketing", date: "9th Jan 2025", amount: "+ $8000" },
  { icon: "🏠", label: "Rental Income", date: "7th Jan 2025", amount: "+ $14000" },
  { icon: "🧑‍💻", label: "Freelancing", date: "4th Jan 2025", amount: "+ $9500" },
];

const IncomeList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {incomeData.map((item, idx) => (
        <div
          key={idx}
          className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
        >
          <div className="flex gap-3 items-center">
            <span className="text-2xl">{item.icon}</span>
            <div>
              <p className="font-medium">{item.label}</p>
              <p className="text-sm text-gray-400">{item.date}</p>
            </div>
          </div>
          <div className="text-green-500 font-semibold flex items-center gap-2">
            {item.amount} <FiTrendingUp />
          </div>
        </div>
      ))}
    </div>
  );
};

export default IncomeList;
