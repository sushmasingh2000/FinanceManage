import React, { useState } from "react";
import { FiTrendingUp } from "react-icons/fi";
import { apiConnectorGet, apiConnectorPost } from "../../../utils/APIConnector";
import { endpoint } from "../../../utils/APIRoutes";
import { useQuery, useQueryClient } from "react-query";
import { useFormik } from "formik";
import CustomPagination from "../../../Shared/Pagination";
import moment from "moment";

const IncomeList = () => {
  const [page, setPage] = useState(1);
  const client = useQueryClient();

  const initialValues = {
    income_Type: "",
    search: "",
    count: 10,
    start_date: "",
    end_date: "",
  };
  const fk = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
  });
  const { data } = useQuery(
    [
      "get_income",
      fk.values.search,
      fk.values.start_date,
      fk.values.end_date,
      page,
    ],
    () =>
      apiConnectorGet(endpoint?.get_user_income, {
        search: fk.values.search,
        start_date: fk.values.start_date,
        end_date: fk.values.end_date,
        page: page,
        count: "10",
        type:"Cr"
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
    <>
      <div className="flex flex-col sm:flex-wrap md:flex-row items-center my-10  gap-3 sm:gap-4 w-full text-sm sm:text-base">
        <input
          type="date"
          name="start_date"
          id="start_date"
          value={fk.values.start_date}
          onChange={fk.handleChange}
          className="bg-green-700 border border-green-600  py-2 px-3 text-white placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto text-sm"
        />
        <input
          type="date"
          name="end_date"
          id="end_date"
          value={fk.values.end_date}
          onChange={fk.handleChange}
          className="bg-green-700 border border-green-600  py-2 px-3 text-white placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto text-sm"
        />
        <input
          type="text"
          name="search"
          id="search"
          value={fk.values.search}
          onChange={fk.handleChange}
          placeholder="Search"
          className="bg-green-700 border rounded-full py-2 px-3 !text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto text-sm"
        />
        <button
          onClick={() => {
            setPage(1);
            client.invalidateQueries({ queryKey: ["get_income"] }); // ✅ This invalidates filtered queries
          }}
          type="submit"
          className="bg-green-500 text-gray-900 font-bold py-2 px-4 rounded-full hover:bg-green-600 transition-colors w-full sm:w-auto text-sm"
        >
          Search
        </button>

        <button
          onClick={() => {
            fk.handleReset();
            setPage(1);
          }}
          className="bg-gray-600 text-white font-bold py-2 px-4 rounded-full hover:bg-gray-700 transition-colors w-full sm:w-auto text-sm" // Adjusted class name for consistency
        >
          Clear
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {allData?.data?.map((item, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-xl flex justify-between items-center transition-colors duration-300"
          >
            <div className="flex gap-3 items-center">
              <span className="">{item.ldg_source}</span>
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-100">{item.ldg_trans_id}</p>
                <p className="text-sm text-gray-400 dark:text-gray-400">{moment(item.ldg_createdAt)?.format("DD-MM-YYYY")}</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-green-500 font-semibold flex items-center gap-2">
                {item.ldg_cr_amount} <FiTrendingUp />
              </div>
              <p className="text-sm text-gray-400 dark:text-gray-400">{moment(item.ldg_datetime)?.format("DD-MM-YYYY")}</p>

            </div>
          </div>
        ))}
      </div>
      <CustomPagination page={page} setPage={setPage} data={allData} />
    </>
  );
};

export default IncomeList;
