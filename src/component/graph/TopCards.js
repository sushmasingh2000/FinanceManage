import React from "react";
import { FaWallet, FaArrowUp, FaArrowDown } from "react-icons/fa";

const TopCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-5 hover:shadow-2xl transition-shadow cursor-pointer">
        <div className="bg-purple-100 text-red-600 p-4 rounded-full text-xl flex items-center justify-center">
          <FaWallet />
        </div>
        <div>
          <p className="text-gray-500 uppercase tracking-wide text-sm font-semibold">
            Total Balance
          </p>
          <h3 className=" font-bold text-gray-900 mt-1">$79,100</h3>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-5 hover:shadow-2xl transition-shadow cursor-pointer">
        <div className="bg-green-100 text-green-600 p-4 rounded-full text-xl flex items-center justify-center">
          <FaArrowUp />
        </div>
        <div>
          <p className="text-gray-500 uppercase tracking-wide text-sm font-semibold">
            Total Income
          </p>
          <h3 className="font-bold text-gray-900 mt-1">$86,200</h3>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-5 hover:shadow-2xl transition-shadow cursor-pointer">
        <div className="bg-red-100 text-red-600 p-4 rounded-full text-xl flex items-center justify-center">
          <FaArrowDown />
        </div>
        <div>
          <p className="text-gray-500 uppercase tracking-wide text-sm font-semibold">
            Total Expenses
          </p>
          <h3 className=" font-bold text-gray-900 mt-1">$7,100</h3>
        </div>
      </div>
    </div>
  );
};

export default TopCards;
