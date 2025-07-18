import React, { useState } from "react";

const AddIncome = ({ isOpen, onClose, onAddIncome }) => {
  const [icon, setIcon] = useState("");
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddIncome({ icon, source, amount, date });
    onClose();
    // Clear form
    setIcon("");
    setSource("");
    setAmount("");
    setDate("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <h2 className="text-xl font-semibold mb-4">Add Income</h2>

        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Pick Icon */}
          <div>
            <label className="flex items-center gap-2 font-medium text-green-700 cursor-pointer">
              <span className="p-2 bg-green-100 rounded">
                {/* Replace with icon picker or file input */}
                
              </span>
             
              <input
                type="text"
                placeholder="image"
                className="ml-2 p-2 border border-gray-300 rounded w-full"
                value={icon}
                onChange={(e) => setIcon(e.target.value)}
              />
            </label>
          </div>

          {/* Income Source */}
          <div>
            <label className="block mb-1 font-medium">Income Source</label>
            <input
              type="text"
              placeholder="Freelance, Salary, etc"
              className="w-full p-2 border border-gray-300 rounded"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              required
            />
          </div>

          {/* Amount */}
          <div>
            <label className="block mb-1 font-medium">Amount</label>
            <input
              type="number"
              placeholder="Amount"
              className="w-full p-2 border border-gray-300 rounded"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              min="0"
              step="0.01"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block mb-1 font-medium">Date</label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
           <div className="flex justify-end ">
          <button
            type="submit"
            className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
          >
           Submit
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddIncome;
