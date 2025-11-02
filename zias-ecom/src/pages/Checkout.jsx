// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function CheckoutPage() {
//   const navigate = useNavigate();
//   const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
//   const [message, setMessage] = useState("");

//   const handleCheckout = async () => {
//     if (!user) {
//       alert("Please login to continue checkout");
//       navigate("/login");
//       return;
//     }

//     if (cart.length === 0) {
//       alert("Your cart is empty!");
//       return;
//     }

  
//     const orderData = {
//       userId: user.id,
//       items: cart,
//       total: cart.reduce((sum, item) => sum + item.price *(item.quantity || 1), 0),
//       date: new Date().toISOString(),
//     };

//     try {
      
//       await axios.post("http://localhost:5000/orders", orderData);

    
//       localStorage.removeItem("cart");
//       navigate("/orders")
//       setCart([]);
//       setMessage("Order placed successfully!");

      
//       setTimeout(() => navigate("/orders"), 2000);
//     } catch (err) {
//       console.error("Checkout error:", err);
//       setMessage(" Something went wrong. Try again.");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
//       <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
//         <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
//           Checkout
//         </h2>

//         {cart.map((item) => (
//           <div key={item.id} className="flex justify-between border-b py-2">
//             <span>{item.name}</span>
//             <span>${item.price}</span>
//           </div>
//         ))}

//         <div className="flex justify-between mt-4 font-bold text-lg">
//           <span>Total</span>
//           <span>${cart.reduce((sum, item) => sum + item.price, 0)}</span>
//         </div>

//         <button
//           onClick={handleCheckout}
//           className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
//         >
//           Confirm Order
//         </button>

//         {message && (
//           <p className="text-center text-green-600 font-semibold mt-4 animate-bounce">
//             {message}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }







import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "" });
  const [address, setAddress] = useState("");
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const allCarts = JSON.parse(localStorage.getItem("cart")) || {};
    const userCart =
      storedUser && storedUser.email ? allCarts[storedUser.email] || [] : [];

    setUser(storedUser || { email: "" });
    setCart(userCart);

    const totalPrice = userCart.reduce(
      (sum, item) => sum + Number(item.price) * (item.quantity || 1),
      0
    );
    setTotal(totalPrice);
  }, []);

  const handleContinue = () => {
    if (!user.email || !address || cart.length === 0) {
      alert("Please fill all details and have items in your cart!");
      return;
    }

    const newOrder = {
      id: Date.now(),
      userEmail: user.email,
      address,
      items: cart,
      total,
      date: new Date().toISOString(),
      status: "Processing",
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([...existingOrders, newOrder]));

    const allCarts = JSON.parse(localStorage.getItem("cart")) || {};
    delete allCarts[user.email];
    localStorage.setItem("cart", JSON.stringify(allCarts));

    
    navigate("/checkout/success", { state: { total, email: user.email } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex justify-center items-center py-10 px-4 font-[Poppins]">
      <div className="w-full max-w-5xl bg-white shadow-xl rounded-2xl p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
    
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Checkout</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={user.email}
                readOnly
                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Shipping Address
              </label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                rows={3}
                placeholder="Enter your full address..."
              />
            </div>

            <button
              type="button"
              onClick={handleContinue}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl text-lg font-medium transition-all shadow-md hover:shadow-lg"
            >
              Confirm & Continue
            </button>
          </div>
        </div>

        
        <div className="bg-gray-50 p-6 rounded-xl shadow-inner">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Order Summary
          </h3>

          {cart.length === 0 ? (
            <p className="text-center text-gray-500">No items in your cart.</p>
          ) : (
            <div className="space-y-4 max-h-[300px] overflow-y-auto">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b pb-3"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover border"
                    />
                    <div>
                      <p className="font-medium text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity || 1}
                      </p>
                      <p className="text-sm text-gray-600">
                        Price: ₹{item.price}
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold text-gray-800">
                    ₹{(item.price * (item.quantity || 1)).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 border-t pt-4 text-right">
            <p className="text-lg font-bold text-gray-800">
              Total: ₹{total.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
