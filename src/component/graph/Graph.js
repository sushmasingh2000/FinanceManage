import React from "react";

const data = [
  { label: "Shopping", date: "17th Feb 2025", amount: "- $430", emoji: "🛍️" },
  { label: "Travel", date: "13th Feb 2025", amount: "- $670", emoji: "✈️" },
  { label: "Electricity Bill", date: "11th Feb 2025", amount: "- $200", emoji: "💡" },
  { label: "Loan Repayment", date: "10th Feb 2025", amount: "- $600", emoji: "🏦" },
  { label: "Transport", date: "14th Jan 2025", amount: "- $300", emoji: "🚌" },
];

const Transactions = () => {
  return (
    <div className="bg-white p-6 rounded shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Recent Transactions</h3>
        <button className="text-sm text-gray-500 hover:underline">See All ➔</button>
      </div>
      <ul className="space-y-4">
        {data.map((item, idx) => (
          <li key={idx} className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="text-xl">{item.emoji}</span>
              <div>
                <p className="font-medium">{item.label}</p>
                <p className="text-sm text-gray-400">{item.date}</p>
              </div>
            </div>
            <span className="text-red-500 font-semibold">{item.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
