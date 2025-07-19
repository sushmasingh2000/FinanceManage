import React, { useState, useContext } from "react";
import { FiDownload } from "react-icons/fi";
import IncomeBarChart from "./IncomeBar";
import IncomeList from "./IncomeList";
import Navbar from "../../../layout/Navbar";
import AddIncome from "./AddIncome";
import { Menu, X } from "lucide-react";
import { ThemeContext } from "../../../context/ThemeContext";
import logo from "../../../images/logo_white.png";

const Income = () => {
  const { theme } = useContext(ThemeContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [incomes, setIncomes] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleAddIncome = (income) => {
    setIncomes([...incomes, income]);
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-[#0f172a]">
        
        {/* Header */}
        <header className="bg-emerald-600 dark:bg-emerald-700 text-white text-2xl font-bold py-4 px-6 shadow-md tracking-wide flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Xpensify Logo" className="h-12 w-auto max-w-[200px] rounded-md shadow-md" />
            <span className="text-white text-2xl font-semibold tracking-tight">Xpensify Income</span>
          </div>

          {/* Hamburger Button */}
          <button className="md:hidden text-white" onClick={toggleSidebar}>
            {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </header>

        <div className="flex flex-1">
          {/* Desktop Sidebar */}
          <div className="hidden md:flex">
            <Navbar />
          </div>

          {/* Mobile Sidebar */}
          {isSidebarOpen && (
            <div className="fixed z-50 md:hidden bg-emerald-700 text-white w-64 h-full shadow-lg">
              <Navbar />
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1 h-full overflow-y-auto text-gray-800 dark:text-gray-100">
            {/* Top Bar */}
            <div className="flex justify-between items-center p-6">
              <h2 className="text-xl font-bold">Income</h2>
              <button
                className="bg-emerald-600 dark:bg-emerald-700 text-white px-4 py-2 rounded shadow hover:bg-emerald-700"
                onClick={() => setModalOpen(true)}
              >
                + Add Income
              </button>
            </div>

            {/* Modal */}
            <AddIncome
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              onAddIncome={handleAddIncome}
            />

            {/* Chart */}
            <div className="px-6 pb-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                <IncomeBarChart />
              </div>

              {/* Header with download */}
              <div className="mt-6 flex justify-between items-center">
                <h3 className="text-lg font-semibold">Income Sources</h3>
                <button className="flex items-center gap-2 bg-gray-100 dark:bg-slate-700 px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-slate-600 text-sm">
                  <FiDownload /> Download
                </button>
              </div>

              {/* List */}
              <IncomeList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Income;
