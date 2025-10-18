import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../services/api";

export default function Cart() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);

    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const handleRemove = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleQuantityChange = (id, qty) => {
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: qty } : item
    );
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    if (!user) return alert("Login to checkout!");

    const order = {
      userId: user.id,
      items: cart,
      total: totalPrice,
      date: new Date().toISOString(),
    };

    try {
      await createOrder(order);
      alert("Order confirmed!");
      localStorage.removeItem("cart");
      setCart([]);
      navigate("/orders");
    } catch (err) {
      console.error("Checkout failed:", err);
      alert("Checkout failed!");
    }
  };

  if (cart.length === 0)
    return <p className="p-6 text-center text-gray-700">Your cart is empty.</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border p-4 rounded"
          >
            <div>
              <h3 className="font-bold">{item.name}</h3>
              <p>${item.price}</p>
              <input
                type="number"
                min={1}
                value={item.quantity || 1}
                onChange={(e) => handleQuantityChange(item.id, +e.target.value)}
                className="border p-1 rounded w-16 mt-1"
              />
            </div>
            <button
              onClick={() => handleRemove(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <span className="font-bold text-xl">Total: ${totalPrice.toFixed(2)}</span>
        <button
          onClick={handleCheckout}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
