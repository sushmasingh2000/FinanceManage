import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-green-200 items-center justify-center">
      <div className="w-full max-w-md bg-white border border-gray-300 rounded-xl shadow-lg p-8">
        <h2 className="text-xl font-bold mb-10 text-center">Create an Account</h2>

        <div className="space-y-4">
          {/* Full Name and Email in two columns */}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-1/2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-1/2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
       
          <input
            type="email"
            placeholder="Mobile No"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="w-full p-3 border rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
            </button>
          </div>

          <button className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
            SIGN UP
          </button>

          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <p className="text-green-600 font-semibold hover:underline" 
            onClick={()=>navigate('/')}>
              Login
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
