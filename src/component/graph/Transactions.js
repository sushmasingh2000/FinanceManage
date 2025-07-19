import React, { useState } from "react";
import { useQuery } from "react-query";
import { apiConnectorGet } from "../../utils/APIConnector";
import { domain, endpoint } from "../../utils/APIRoutes";
import moment from "moment";
import CustomToPagination from "../../Shared/Pagination";

const data = [
  { label: "Shopping", date: "17th Feb 2025", amount: "- $430", emoji: "🛍️" },
  { label: "Travel", date: "13th Feb 2025", amount: "- $670", emoji: "✈️" },
  { label: "Electricity Bill", date: "11th Feb 2025", amount: "- $200", emoji: "💡" },
  { label: "Loan Repayment", date: "10th Feb 2025", amount: "- $600", emoji: "🏦" },
  { label: "Transport", date: "14th Jan 2025", amount: "- $300", emoji: "🚌" },
];

const Transactions = () => {
  const [page, setPage] = useState(1);
  const { data } = useQuery(
    ["get_all", page],
    () =>
      apiConnectorGet(endpoint?.get_user_income, {
        page: page,
        count: "5",
        type: "All"
      }),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      onError: (err) => console.error("Error fetching direct data:", err),
    }
  );

  const allData = data?.data?.response || [];
  return (
    <div className="bg-white text-black p-6 rounded shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Recent Transactions</h3>
        <button className="text-sm text-purple-600 font-medium hover:underline flex items-center gap-1">See All ➔</button>
      </div>
      <ul className="space-y-4">
        {allData?.data?.map((item, idx) => (
          <li key={idx} className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src={`${domain}${item.ldg_image}`} alt="expense" className="w-10 h-10 object-cover rounded" />

              <div>
                <p className="font-medium">{item.ldg_trans_id}</p>
                <p className="text-sm text-gray-400">{moment(item.ldg_createdAt)?.format("DD-MM-YYYY")}</p>
              </div>
            </div>
            {item?.ldg_type === "Cr" ?
              <span className="text-red-500 font-semibold">{item.ldg_cr_amount}</span>
              : <span className="text-red-500 font-semibold">{item.ldg_dr_amount}</span>}


          </li>
        ))}
      </ul>
      <CustomToPagination page={page} setPage={setPage} data={allData} />

    </div>
  );
};

export default Transactions;
