import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  

  useEffect(() => {
    
    setCartItems(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white text-white shadow-md sticky top-0 z-50">
    
      <Link to="/" className="font-bold text-2xl text-gray-800 hover:text-gray-400 transition-colors">
         Shoosfie 🛍️
      </Link>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span className="text-gray-700">Hi, {user.name}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="bg-black text-white px-3 py-1 rounded hover:bg-black-600"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-black text-white px-3 py-1 rounded hover:bg-black-600"
            >
              Register
            </Link>
          </>
        )}
        <Link to="/cart" className="relative text-gray-700">
          🛒
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
