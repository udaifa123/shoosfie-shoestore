import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

export default function Success() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const total = state?.total || 0;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-50 text-center">
      <FaCheckCircle className="text-green-500 text-7xl mb-6" />
      <h1 className="text-3xl font-semibold text-gray-800 mb-3">
        Order Successful 🎉
      </h1>
      <p className="text-gray-600 mb-6">
        Thank you for your purchase! Your total amount is{" "}
        <span className="font-bold text-gray-800">₹{total.toFixed(2)}</span>.
      </p>
      <button
        onClick={() => navigate("/orders")}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-lg"
      >
        View My Orders
      </button>
    </div>
  );
}
