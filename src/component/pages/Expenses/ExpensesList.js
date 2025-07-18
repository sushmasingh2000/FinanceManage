import React from "react";
import { FaTrash } from "react-icons/fa";

const expenses = [
  { name: "Shopping", date: "17th Feb 2025", amount: 430, icon: "🛍️" },
  { name: "Electricity Bill", date: "11th Feb 2025", amount: 200, icon: "💡" },
  { name: "Transport", date: "14th Jan 2025", amount: 300, icon: "🚌" },
  { name: "Education", date: "11th Jan 2025", amount: 800, icon: "📚" },
  { name: "Dining Out", date: "9th Jan 2025", amount: 330, icon: "🍽️" },
  { name: "Travel", date: "13th Feb 2025", amount: 670, icon: "✈️" },
  { name: "Loan Repayment", date: "10th Feb 2025", amount: 600, icon: "🏦" },
  { name: "Medical Expenses", date: "10th Jan 2025", amount: 720, icon: "💊" },
  { name: "Entertainment", date: "8th Jan 2025", amount: 450, icon: "🍿" },
  { name: "Fuel", date: "6th Jan 2025", amount: 100, icon: "⛽" },
  { name: "Internet & Phone", date: "4th Jan 2025", amount: 120, icon: "📶" },
  { name: "Rent", date: "2nd Jan 2025", amount: 500, icon: "🏠" },
];

const AllExpenses = () => {
  return (
    <div className="bg-white p-6 rounded shadow w-full mx-auto ">
      

      <div className="space-y-4 overflow-y-auto example max-h-[500px] pr-2">
        {expenses.map((exp, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-50 p-4 rounded hover:shadow transition"
          >
            <div className="flex items-center space-x-4">
              <div className="text-2xl">{exp.icon}</div>
              <div>
                <h4 className="font-medium text-gray-800">{exp.name}</h4>
                <p className="text-sm text-gray-500">{exp.date}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="text-gray-400 hover:text-red-500 transition">
                <FaTrash />
              </button>
              <div className="text-red-500 font-semibold">
                - ${exp.amount}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllExpenses;
