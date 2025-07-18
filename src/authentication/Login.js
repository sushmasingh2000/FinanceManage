import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-green-200 items-center justify-center">
      <div className="w-full max-w-md bg-white border border-gray-300 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-2 text-center">Welcome Back</h2>
        <p className="mb-6 text-gray-500 text-center">Please enter your details to log in</p>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="john@example.com"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Min 8 Characters"
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
          <button className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
           onClick={() => navigate("/home")}>
            LOGIN
          </button>
          <p className="text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <p className="text-green-600 font-semibold hover:underline"
              onClick={() => navigate("/register")}>
              SignUp
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;