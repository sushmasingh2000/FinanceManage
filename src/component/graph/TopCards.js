import React from "react";
import { FaWallet, FaArrowUp, FaArrowDown, FaChartLine, FaCalendarDay } from "react-icons/fa";
import { useQuery } from "react-query";
import { apiConnectorGet } from "../../utils/APIConnector";
import { endpoint } from "../../utils/APIRoutes";

const TopCards = () => {
   const { data } = useQuery(
    ["get_dashboard"],
    () => apiConnectorGet(endpoint?.get_dashboard),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      onError: (err) => console.error("Error fetching income data:", err),
    }
  );

  const allData = data?.data?.response?.[0]?.data?.[0] || {};
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg+10:grid-cols-3 gap-4 p-4">
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center gap-4 hover:shadow-xl transition-shadow cursor-pointer">
        <div className="bg-purple-100 text-purple-600 p-3 rounded-full text-xl">
          <FaWallet />
        </div>
        <div>
          <p className="text-sm text-gray-500 uppercase">Total Balance</p>
          <p className="text-lg font-bold text-gray-900">₹ {Number(allData?.net_amount)?.toFixed(2)}</p>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center gap-4 hover:shadow-xl transition-shadow cursor-pointer">
        <div className="bg-green-100 text-green-600 p-3 rounded-full text-xl">
          <FaArrowUp />
        </div>
        <div>
          <p className="text-sm text-gray-500 uppercase">Total Income</p>
          <p className="text-lg font-bold text-gray-900">₹ {Number(allData?.total_cr)?.toFixed(2)}</p>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center gap-4 hover:shadow-xl transition-shadow cursor-pointer">
        <div className="bg-red-100 text-red-600 p-3 rounded-full text-xl">
          <FaArrowDown />
        </div>
        <div>
          <p className="text-sm text-gray-500 uppercase">Total Expenses</p>
          <p className="text-lg font-bold text-gray-900">₹ {Number(allData?.total_dr)?.toFixed(2)}</p>
        </div>
      </div>
      {/* <div className="bg-white shadow-md rounded-lg p-4 flex items-center gap-4 hover:shadow-xl transition-shadow cursor-pointer">
        <div className="bg-blue-100 text-blue-600 p-3 rounded-full text-xl">
          <FaChartLine />
        </div>
        <div>
          <p className="text-sm text-gray-500 uppercase">Investment</p>
          <p className="text-lg font-bold text-gray-900">₹ {allData?.net_amount}</p>
        </div>
      </div> */}
      <div className="bg-white shadow-md rounded-lg p-4 flex items-center gap-4 hover:shadow-xl transition-shadow cursor-pointer">
        <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full text-xl">
          <FaCalendarDay />
        </div>
        <div>
          <p className="text-sm text-gray-500 uppercase">Daily Budget</p>
          <p className="text-lg font-bold text-gray-900">₹ {Number(allData?.budget)?.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default TopCards;
