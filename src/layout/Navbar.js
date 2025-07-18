import React from "react";
import { FaTachometerAlt, FaMoneyBillWave, FaCreditCard, FaSignOutAlt } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-64 bg-white border-r p-2 pt-5 flex flex-col justify-between h-screen">
      <div className="">
        <div className="flex flex-col items-center mb-5 ">
          <img
            src="https://i.pravatar.cc/100?img=5"
            alt="Avatar"
            className="w-20 h-20 rounded-full shadow-md"
          />
          <h2 className="mt-4 font-semibold text-lg">Demo User</h2>
        </div>

        <nav className="space-y-4 text-gray-700">
          <button
            className={`flex items-center gap-3 font-semibold px-4 py-3 rounded-md w-full transition
              ${
                isActive("/home")
                  ? "text-white bg-green-600 hover:bg-green-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            onClick={() => navigate("/home")}
          >
            <FaTachometerAlt size={20} />
            Dashboard
          </button>

          <button
            className={`flex items-center gap-3 px-4 py-3 rounded-md w-full transition
              ${
                isActive("/income")
                  ? "text-white bg-green-600 hover:bg-green-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            onClick={() => navigate("/income")}
          >
            <FaMoneyBillWave size={20} />
            Income
          </button>

          <button
            className={`flex items-center gap-3 px-4 py-3 rounded-md w-full transition
              ${
                isActive("/expense")
                  ? "text-white bg-green-600 hover:bg-green-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            onClick={() => navigate("/expense")}
          >
            <FaCreditCard size={20} />
            Expense
          </button>

          <button
            className="flex items-center gap-3 px-4 py-3 rounded-md w-full hover:bg-gray-100 transition"
         onClick={()=>navigate('/')} >
            <FaSignOutAlt size={20} />
            Logout
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
