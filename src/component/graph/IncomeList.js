import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const incomeItems = [
  { emoji: "👨‍💼", label: "Salary", date: "12th Feb 2025", amount: "+ $12000" },
  { emoji: "🏦", label: "Interest from Savings", date: "13th Jan 2025", amount: "+ $9600" },
  { emoji: "🛍️", label: "E-commerce Sales", date: "11th Jan 2025", amount: "+ $11900" },
  { emoji: "🎨", label: "Graphic Design", date: "10th Jan 2025", amount: "+ $10500" },
  { emoji: "📢", label: "Affiliate Marketing", date: "9th Jan 2025", amount: "+ $8000" },
];

const IncomeList = () => {
  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Income</h3>
        <button className="text-sm text-purple-600 font-medium hover:underline flex items-center gap-1">
          See All <FaArrowCircleRight className="text-xs" />
        </button>
      </div>
      <ul className="space-y-4">
        {incomeItems.map((item, idx) => (
          <li key={idx} className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="text-xl">{item.emoji}</span>
              <div>
                <p className="font-medium">{item.label}</p>
                <p className="text-sm text-gray-400">{item.date}</p>
              </div>
            </div>
            <span className="text-green-600 font-semibold">{item.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;
