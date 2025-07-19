import React from "react";
import { FiTrendingDown } from "react-icons/fi";

const expenseData = [
  { icon: "🛍️", label: "Shopping", date: "17th Feb 2025", amount: "- $430" },
  { icon: "💡", label: "Electricity Bill", date: "11th Feb 2025", amount: "- $200" },
  { icon: "🚌", label: "Transport", date: "14th Jan 2025", amount: "- $300" },
  { icon: "📚", label: "Education", date: "11th Jan 2025", amount: "- $800" },
  { icon: "🍽️", label: "Dining Out", date: "9th Jan 2025", amount: "- $330" },
  { icon: "✈️", label: "Travel", date: "13th Feb 2025", amount: "- $670" },
  { icon: "🏦", label: "Loan Repayment", date: "10th Feb 2025", amount: "- $600" },
  { icon: "💊", label: "Medical Expenses", date: "10th Jan 2025", amount: "- $720" },
  { icon: "🍿", label: "Entertainment", date: "8th Jan 2025", amount: "- $450" },
  { icon: "⛽", label: "Fuel", date: "6th Jan 2025", amount: "- $100" },
  { icon: "📶", label: "Internet & Phone", date: "4th Jan 2025", amount: "- $120" },
  { icon: "🏠", label: "Rent", date: "2nd Jan 2025", amount: "- $500" },
];

const AllExpenses = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {expenseData.map((item, idx) => (
        <div
          key={idx}
          className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow flex justify-between items-center transition-colors duration-300"
        >
          <div className="flex gap-3 items-center">
            <span className="text-2xl">{item.icon}</span>
            <div>
              <p className="font-medium text-gray-800 dark:text-gray-100">{item.label}</p>
              <p className="text-sm text-gray-400 dark:text-gray-400">{item.date}</p>
            </div>
          </div>
          <div className="text-red-500 font-semibold flex items-center gap-2">
            {item.amount} <FiTrendingDown />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllExpenses;