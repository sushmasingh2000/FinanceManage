import React from "react";
import TopCards from "./graph/TopCards";
import Transactions from "./graph/Graph";
import FinancialChart from "./graph/Financial";
import Navbar from "../layout/Navbar";
import IncomeChart from "./graph/IncomeChart";
import IncomeList from "./graph/IncomeList";
import ExpenseList from "./graph/ExpenseList";
import ExpenseChart from "./graph/ExpenceChart";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-green-700 text-white text-2xl font-bold py-4 px-6 shadow-md">
        Finance Management
      </header>
      <div className="flex flex-1">
        <Navbar />
        <main className="flex-1 p-6 overflow-y-auto h-screen example ">
          <TopCards />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Transactions />
            <FinancialChart />
          </div>
           <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
           <ExpenseList /> 
           <ExpenseChart /> 
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
           <IncomeChart /> 
           <IncomeList /> 
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
