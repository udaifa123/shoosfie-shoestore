import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function Wishlist() {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites([...stored].reverse());
  }, []);

  const handleRemove = (id) => {
    const updated = favorites.filter((item) => item.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const handleAddToCart = (product) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      exists.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const handleClearAll = () => {
    localStorage.removeItem("favorites");
    setFavorites([]);
  };

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center font-urbanist">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
          alt="Empty Wishlist"
          className="w-32 mb-6 opacity-70 hover:scale-105 transition"
        />
        <h2 className="text-2xl font-semibold text-gray-700 tracking-tight">
          Your Wishlist is Empty
        </h2>
        <p className="text-gray-500 mt-2">Add items you love to view them later.</p>
        <button
          onClick={() => navigate("/products")}
          className="mt-6 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition tracking-tight font-semibold"
        >
          Shop Now
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-6 py-10 font-urbanist">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            My Wishlist
          </h2>
          <button
            onClick={handleClearAll}
            className="text-sm text-red-500 hover:underline"
          >
            Clear All
          </button>
        </div>

        <p className="text-gray-500 mb-6">
          You have <span className="font-semibold">{favorites.length}</span> favorite
          {favorites.length > 1 ? "s" : ""}.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {favorites.map((item) => (
            <div
              key={item.id}
              className="group bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col justify-between"
            >
              <div className="relative aspect-square flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-60 object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
                <button
                  onClick={() => handleRemove(item.id)}
                  className="absolute top-3 right-3 text-xl z-10"
                >
                  <FaHeart className="text-red-500 hover:scale-110 transition-transform" />
                </button>
              </div>

              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold text-gray-800 tracking-tight">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="text-lg font-bold text-gray-900 mt-1 tracking-tight">
                  ₹{item.price}
                </p>
              </div>

              <div className="flex gap-3 mt-5">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="flex-1 bg-black text-white py-2 rounded-full hover:bg-gray-800 transition font-semibold tracking-tight"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-full hover:bg-gray-300 transition font-medium"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
