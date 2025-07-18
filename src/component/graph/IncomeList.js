import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const incomeData = [
  { name: "Salary", date: "12th Feb 2025", amount: 12000 },
  { name: "Interest from Savings", date: "13th Jan 2025", amount: 9600 },
  { name: "E-commerce Sales", date: "11th Jan 2025", amount: 11900 },
  { name: "Graphic Design", date: "10th Jan 2025", amount: 10500 },
  { name: "Affiliate Marketing", date: "9th Jan 2025", amount: 8000 },
];

const IncomeList = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Income</h3>
        <button className="text-sm text-purple-600 font-medium hover:underline flex items-center gap-1">
          See All 
        </button>
      </div>
      <ul className="space-y-4">
        {incomeData.map((item, idx) => (
          <li key={idx} className="flex justify-between items-center">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-xs text-gray-500">{item.date}</p>
            </div>
            <div className="text-green-600 font-semibold text-sm flex items-center gap-1">
              +${item.amount.toLocaleString()}
              <FaArrowCircleRight className="text-xs" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;
