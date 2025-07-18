import React, { useState } from "react";
import { AiOutlineClose, AiOutlinePicture } from "react-icons/ai";

const AddExpense = ({ isOpen, onClose, onAdd }) => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category || !amount || !date) return;
    onAdd({ category, amount, date });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-md relative shadow-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          <AiOutlineClose size={20} />
        </button>

        {/* Modal Title */}
        <h2 className="text-xl font-semibold mb-5 text-gray-800">Add Expense</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Pick Icon */}
         
          {/* Category */}
          <input
            type="text"
            className="w-full p-3 border rounded outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Rent, Groceries, etc"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          {/* Amount */}
          <input
            type="number"
            className="w-full p-3 border rounded outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          {/* Date */}
          <input
            type="date"
            className="w-full p-3 border rounded outline-none focus:ring-2 focus:ring-green-400"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
          >
            Add Expense
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddExpense