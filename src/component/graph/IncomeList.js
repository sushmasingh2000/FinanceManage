import React, { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { useQuery } from "react-query";
import { apiConnectorGet } from "../../utils/APIConnector";
import { domain, endpoint } from "../../utils/APIRoutes";
import CustomToPagination from "../../Shared/Pagination";
import moment from "moment";

const incomeItems = [
  { emoji: "👨‍💼", label: "Salary", date: "12th Feb 2025", amount: "+ $12000" },
  { emoji: "🏦", label: "Interest from Savings", date: "13th Jan 2025", amount: "+ $9600" },
  { emoji: "🛍️", label: "E-commerce Sales", date: "11th Jan 2025", amount: "+ $11900" },
  { emoji: "🎨", label: "Graphic Design", date: "10th Jan 2025", amount: "+ $10500" },
  { emoji: "📢", label: "Affiliate Marketing", date: "9th Jan 2025", amount: "+ $8000" },
];

const IncomeList = () => {
  const [page, setPage] = useState(1);
  const { data } = useQuery(
    ["get_income", page],
    () =>
      apiConnectorGet(endpoint?.get_user_income, {
        page: page,
        count: "5",
        type: "Cr"
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
    <div className="bg-white text-black p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Income</h3>
        <button className="text-sm text-purple-600 font-medium hover:underline flex items-center gap-1">
          See All <FaArrowCircleRight className="text-xs" />
        </button>
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
            <span className="text-green-600 font-semibold">{item.ldg_cr_amount}</span>
          </li>
        ))}
      </ul>
      <CustomToPagination page={page} setPage={setPage} data={allData} />
    </div>
  );
};

export default IncomeList;
