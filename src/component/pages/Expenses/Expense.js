import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";
import Navbar from "../../../layout/Navbar";
import AddExpense from "./AddExpenses";
import ExpenseOverview from "./Overview";
import AllExpenses from "./ExpensesList";


const Expense = () => {
   const [showModal, setShowModal] = useState(false);

  const handleAddExpense = (data) => {
    console.log("Added Expense:", data);
    // Here you can POST to backend or update state
  };
    return (
        <>
            <header className="bg-green-700 text-white text-2xl font-bold py-4 px-6 shadow-md">
                Finance Management
            </header>
            <div className="flex min-h-screen">
                {/* Sidebar */}
                <div className="w-64 h-screen sticky top-0 left-0 z-10">
                    <Navbar />
                </div>

                {/* Main Content */}
                <div className="flex-1 h-screen overflow-y-auto example bg-gray-50 flex flex-col">
                    {/* Top Header */}
                    <header className="bg-white text-xl font-bold py-4 px-6 shadow">
                        Expense
                    </header>
                    <div className="flex justify-end ">
                        <button
                            className="bg-green-700 text-white mt-4 mx-5 px-4 py-2 rounded float-right"
                            onClick={() => setShowModal(true)}
                        >
                            + Add Expense
                        </button>
                    </div>


                    <AddExpense
                        isOpen={showModal}
                        onClose={() => setShowModal(false)}
                        onAdd={handleAddExpense}
                    />

                    <main className="p-6 space-y-6 ">
                        {/* Income Chart */}
                        <div className="bg-white p-6  rounded-lg shadow-md">
                            <ExpenseOverview />
                        </div>

                        {/* Income Sources Header + Download */}
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold">Expense Sources</h3>
                            <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200 text-sm">
                                <FiDownload /> Download
                            </button>
                        </div>

                        <AllExpenses />
                    </main>
                </div>
            </div></>
    );
};

export default Expense;
