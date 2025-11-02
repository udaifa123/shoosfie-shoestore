// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { createOrder } from "../services/api";

// export default function Cart() {
//   const navigate = useNavigate();
//   const [cart, setCart] = useState([]);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     setUser(storedUser);

//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(storedCart);
//   }, []);

//   const handleRemove = (id) => {
//     const newCart = cart.filter((item) => item.id !== id);
//     setCart(newCart);
//     localStorage.setItem("cart", JSON.stringify(newCart));
//   };

//   const handleQuantityChange = (id, qty) => {
//     const newCart = cart.map((item) =>
//       item.id === id ? { ...item, quantity: qty } : item
//     );
//     setCart(newCart);
//     localStorage.setItem("cart", JSON.stringify(newCart));
//   };

//   const totalPrice = cart.reduce(
//     (sum, item) => sum + Number(item.price) * Number(item.quantity || 1),
// 0
//   );
//   const handleCheckout = async () => {
//     if (!user) return alert("Login to checkout!");

//     const order = {
//       userId: user.id,
//       items: cart,
//       total: totalPrice,
//       date: new Date().toISOString(),
//     };

//     try {
//       await createOrder(order);
//       alert("Order confirmed!");
//       localStorage.removeItem("cart");
//       setCart([]);
//       navigate("/orders");
//     } catch (err) {
//       console.error("Checkout failed:", err);
//       alert("Checkout failed!");
//     }
//   };

//   if (cart.length === 0)
//     return(
//   <div className="min-h-screen w-screen flex items-center justify-center bg-gray-10">
//    <p className=" text-lg text-gray-700 mb-90">Your cart is currently empty.</p>
//    <img src="https://static.vecteezy.com/system/resources/previews/046/334/025/original/shopping-cart-silhouette-shopping-cart-logo-shopping-cart-black-icon-vector.jpg" alt=""
//    className="w-70 h-70 object-contain mb-70"
//    />
//    </div>
//     );

//   return (
//     <div className="min-h-screen w-screen p-4 flex justify-center b-gray-50 ">
//       <div className="w-full max-w-3xl">
//       <h2 className="text-2xl font-bold mb-4">Cart</h2>
//       <div className="space-y-4">
//         {cart.map((item) => (
//           <div
//             key={item.id}
//             className="flex justify-between items-center border p-4 rounded bg-white shadow-sm"
//           >
//             <div>
//               <h3 className="font-bold">{item.name}</h3>
//               <p>${item.price}</p>
//               <input
//                 type="number"
//                 min={1}
//                 value={item.quantity || 1}
//                 onChange={(e) => handleQuantityChange(item.id, +e.target.value)}
//                 className="border p-1 rounded w-16 mt-1"
//               />
//             </div>
//             <button
//               onClick={() => handleRemove(item.id)}
//               className="bg-red-500 text-white px-3 py-1 rounded"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className="mt-6 flex justify-between items-center">
//         <span className="font-bold text-xl">Total: {totalPrice.toFixed(2)}</span>
//         <button
//           onClick={handleCheckout}
//           className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//         >
//           Checkout
//         </button>
//       </div>
//     </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("user"));
    setUser(u);

    const allCarts = JSON.parse(localStorage.getItem("cart")) || {};
    if (u && u.email && allCarts[u.email]) {
      setCart(allCarts[u.email]);
    }
  }, []);

  const updateStorage = (updated) => {
    if (!user || !user.email) return;
    const allCarts = JSON.parse(localStorage.getItem("cart")) || {};
    allCarts[user.email] = updated;
    localStorage.setItem("cart", JSON.stringify(allCarts));
  };

  const handleQuantity = (id, size, qty) => {
    const updated = cart.map((i) =>
      i.id === id && i.size === size
        ? { ...i, quantity: Math.max(1, qty) }
        : i
    );
    setCart(updated);
    updateStorage(updated);
  };

  const handleRemove = (id, size) => {
    const updated = cart.filter((i) => !(i.id === id && i.size === size));
    setCart(updated);
    updateStorage(updated);
  };

  const subtotal = cart.reduce(
    (sum, i) => sum + Number(i.price) * (i.quantity || 1),
    0
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  if (cart.length === 0)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center">
        <img
          src="https://static.vecteezy.com/system/resources/previews/046/334/025/original/shopping-cart-silhouette-shopping-cart-logo-shopping-cart-black-icon-vector.jpg"
          alt="Empty"
          className="w-40 h-40 mb-4"
        />
        <p className="text-gray-600 mb-6 text-lg">
          Your cart is currently empty.
        </p>
        <button
          onClick={() => navigate("/products")}
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Go Shopping
        </button>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h2>

        <div className="space-y-4">
          {cart.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center border rounded-lg p-4 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded object-cover border"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">₹{item.price}</p>
                  <p className="text-sm text-gray-500">Size: {item.size}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center border rounded">
                  <button
                    onClick={() =>
                      handleQuantity(item.id, item.size, (item.quantity || 1) - 1)
                    }
                    disabled={(item.quantity || 1) <= 1}
                    className="px-3 py-1 text-lg font-bold"
                  >
                    −
                  </button>
                  <span className="px-3">{item.quantity || 1}</span>
                  <button
                    onClick={() =>
                      handleQuantity(item.id, item.size, (item.quantity || 1) + 1)
                    }
                    className="px-3 py-1 text-lg font-bold"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemove(item.id, item.size)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t pt-4 text-right">
          <p className="text-gray-700">
            Subtotal: <b>₹{subtotal.toFixed(2)}</b>
          </p>
          <p className="text-gray-700">
            Tax (10%): <b>₹{tax.toFixed(2)}</b>
          </p>
          <p className="text-xl font-bold">Total: ₹{total.toFixed(2)}</p>
        </div>

        <div className="mt-6 flex justify-between">
          <button
            onClick={() => navigate("/products")}
            className="bg-gray-200 px-5 py-2 rounded hover:bg-gray-300"
          >
            Continue Shopping
          </button>
          <button
            onClick={() => navigate("/checkout")}
            className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
