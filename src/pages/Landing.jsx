import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Landing = () => {
  const navigate = useNavigate();
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Dashboard Panel Component for logged out users
  const DashboardPanel = () => (
    <div className="min-h-screen bg-gradient-to-b from-gray-200 to-white text-gray-900">
      <div className="relative flex flex-col items-center justify-center text-center py-20 px-6">
        <motion.div
          className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md transform transition duration-300"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Welcome to TaskFlow
          </h1>
          <p className="text-gray-600 mb-8">
            Please login to access the full application features.
          </p>
          
          <div className="space-y-4">
            <button
              onClick={() => navigate("/login")}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-md shadow-md hover:opacity-90 transition"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="w-full py-3 border border-gray-400 text-gray-800 font-semibold rounded-md shadow-md hover:bg-gray-200 transition"
            >
              Sign Up
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );

  // Return only the dashboard panel for unauthenticated users
  return <DashboardPanel />;
};

export default Landing;
