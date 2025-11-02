// import React, { useEffect, useState } from "react";
// import { getOrders } from "../services/api";

// export default function Orders() {
//   const [orders, setOrders] = useState([]);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     setUser(storedUser);

//     if (storedUser) {
//       getOrders()
//         .then((res) => {
//           const userOrders = res.data.filter((o) => o.userId === storedUser.id);
//           setOrders(userOrders);
//         })
//         .catch((err) => console.error(err));
//     }
//   }, []);

//   if (!user) return <p className="p-6 text-center text-gray-700">Login to view your orders.</p>;
//   if (orders.length === 0) return <p className="p-6 text-center text-gray-700">No orders yet.</p>;

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
//       <div className="space-y-4">
//         {orders.map((order) => (
//           <div key={order.id} className="border p-4 rounded">
//             <p className="text-gray-600 text-sm">{new Date(order.date).toLocaleString()}</p>
//             <ul className="mt-2 space-y-1">
//               {order.items.map((item) => (
//                 <li key={item.id}>{item.name} x {item.quantity || 1} - ${item.price}</li>
//               ))}
//             </ul>
//             <p className="font-bold mt-2">Total: ${order.total.toFixed(2)}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Orders() {
//   const [orders, setOrders] = useState([]);
//   const [loading,setLoading]=useState(true);
//   const[error,setError]=useState(null);

//   const user = JSON.parse(localStorage.getItem("user"));

//   useEffect(() => {
//     if (user) {
//       setLoading(false);
//       return;
//     }

//       setLoading(true);
//       axios
//         .get(`http://localhost:5000/orders?userId=${user.id}`)
//         .then((res) =>{
//         setOrders(res.data || []);
//         setLoading(false);
// })

//       .catch((err) => {
//        console.error("Error fetching orders:", err);
//        setError("Failed to fetch orders.");
//        setLoading(false);
//       });
    
//   }, [user]);

//   if (!user)
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <p className="text-gray-600 text-lg">Please login to view your orders.</p>
//       </div>
//     );
//   if(loading)
//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <p className="text-gray-600 text-lg">Loading orders...</p>
//       </div>
//   );

//   if(error)
//     return(
//         <div className="flex justify-center items-center min-h-screen">
//           <p className="text-red-500 text-lg">{error}</p>
//           </div>
//     );

//     return(
//       <div className="p-6 min-h-screen bg-gray-50">
//         <h2 className="text-2xl font-bold mb-6 text-gray-800">My Orders</h2>
    

//       {orders.length === 0 ? (
//         <p className="text-gray-600">No orders found.</p>
//       ) : (
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {orders.map((order) => (
//             <div
//               key={order.id}
//               className="bg-white border rounded-xl shadow p-4 hover:shadow-lg transition"
//             >
//               <p className="text-gray-800 font-semibold mb-2">
//                 Order Date: {new Date(order.date).toLocaleDateString()}
//               </p>
//               <ul className="mb-3 text-gray-700">
//                 {order.items.map((item, i) => (
//                   <li key={i}>
//                     {item.name} – ${Number(item.price).toFixed(2)}
//                   </li>
//                 ))}
//               </ul>
//               <p className="font-bold text-gray-900">
//                 Total: ${Number(order.total).toFixed(2)}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }




// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Orders() {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

  
//   const user = JSON.parse(localStorage.getItem("user"));

//   useEffect(() => {
//     const fetchOrders = async () => {
//       console.log("User:",user);
//       if (!user) {
//         setLoading(false); 
//         return;
//       }

//       try {
//         setLoading(true);
//         const res = await axios.get(`http://localhost:5000/orders?userId=${user.id}`);
//         console.log("Orders response:",res.data)
//         setOrders(res.data || []);
//       } catch (err) {
//         console.error("Error fetching orders:", err);
//         setError("Failed to fetch orders.");
//       } finally {
//         setLoading(false); 
//       }
//     };

//     fetchOrders();
//   }, [user]);

//   const cancelOrder = async (orderId) => {
//     try {
//       await axios.patch(`http://localhost:5000/orders/${orderId}`, { status: "Cancelled" });
      
//       const res = await axios.get(`http://localhost:5000/orders?userId=${user.id}`);
//       setOrders(res.data || []);
//     } catch (err) {
//       console.error("Cancel error:", err);
//       alert("Failed to cancel order");
//     }
//   };                                                

//   if (!user) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <p className="text-gray-600 text-lg">Please login to view your orders.</p>
//       </div>
//     );
//   }

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <p className="text-gray-600 text-lg">Loading orders...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <p className="text-red-500 text-lg">{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 min-h-screen bg-gray-50">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800">My Orders</h2>

//       {orders.length === 0 ? (
//         <p className="text-gray-600">No orders found.</p>
//       ) : (
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {orders.map((order) => (
//             <div key={order.id} className="bg-white p-4 rounded shadow">
//               <p className="font-semibold mb-2">
//                 Order Date: {new Date(order.date).toLocaleString()}
//               </p>

//               {order.items?.map((item, i) => (
//                 <div key={i} className="flex items-center gap-3 mb-2">
//                   <img
//                     src={item.image || "https://via.placeholder.com/80"}
//                     alt={item.name}
//                     className="w-16 h-16 rounded"
//                   />
//                   <div>
//                     <p>{item.name}</p>
//                     <p>₹{item.price}</p>
//                   </div>
//                 </div>
//               ))}

//               <p className="font-bold">Total: ₹{order.total}</p>

//               {order.status !== "Cancelled" ? (
//                 <button
//                   onClick={() => cancelOrder(order.id)}
//                   className="bg-red-600 text-white px-2 py-1 rounded mt-2"
//                 >
//                   Cancel Order
//                 </button>
//               ) : (
//                 <span className="text-red-500 font-semibold">Cancelled</span>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }





// import React, { useEffect, useState } from "react";

// export default function Orders() {
//   const [orders, setOrders] = useState([]);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [message, setMessage] = useState({ text: "", type: "" });

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];

//     if (!storedUser || !storedUser.id) {
//       setError("Please login to view your orders.");
//       setLoading(false);
//       return;
//     }

//     const userOrders = storedOrders.filter((order) => order.userId === storedUser.id);
//     setUser(storedUser);
//     setOrders(userOrders);
//     setLoading(false);
//   }, []);

//   const handleCancelOrder = (orderId) => {
//     const updatedOrders = orders.map((order) =>
//       order.id === orderId ? { ...order, status: "Cancelled" } : order
//     );

//     setOrders(updatedOrders);
//     localStorage.setItem("orders", JSON.stringify(updatedOrders));
//     setMessage({ text: "Order cancelled successfully!", type: "success" });

//     setTimeout(() => setMessage({ text: "", type: "" }), 3000);
//   };

//   const handleClearOrder = (orderId) => {
//     const updatedOrders = orders.filter((order) => order.id !== orderId);
//     setOrders(updatedOrders);
//     localStorage.setItem("orders", JSON.stringify(updatedOrders));
//     setMessage({ text: "Cancelled order cleared!", type: "success" });

//     setTimeout(() => setMessage({ text: "", type: "" }), 3000);
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Pending":
//         return "text-yellow-600";
//       case "Shipping":
//         return "text-blue-600";
//       case "Delivered":
//         return "text-green-600";
//       case "Cancelled":
//         return "text-red-600";
//       default:
//         return "text-gray-600";
//     }
//   };

//   if (loading) return <p className="text-center mt-10">Loading orders...</p>;
//   if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <h2 className="text-3xl font-bold text-center mb-8">My Orders</h2>

//       {message.text && (
//         <div
//           className={`mb-6 text-center py-2 px-4 rounded ${
//             message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
//           } transition duration-300`}
//         >
//           {message.text}
//         </div>
//       )}

//       {orders.length === 0 ? (
//         <p className="text-center text-gray-500">No orders found.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {orders.map((order) => (
//             <div
//               key={order.id}
//               className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col"
//             >
          
//               <div className="p-4 border-b space-y-2">
//                 {order.items.map((item, index) => (
//                   <div key={index} className="flex items-center gap-3">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-16 h-16 object-cover rounded border"
//                       onError={(e) => (e.target.src = "/fallback.jpg")}
//                     />
//                     <div>
//                       <p className="font-medium text-gray-800">{item.name}</p>
//                       <p className="text-sm text-gray-500">Size: {item.size || "N/A"}</p>
//                       <p className="text-sm text-gray-500">Qty: {item.quantity || 1}</p>
//                       <p className="text-sm text-gray-500">Price: ${item.price}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

              
//               <div className="px-4 py-3 flex-1 flex flex-col justify-between">
//                 <div>
//                   <p className="text-sm text-gray-500">Order ID: {order.id}</p>
//                   <p className="text-sm text-gray-500">
//                     Placed on: {new Date(order.date).toLocaleDateString()}{" "}
//                     {new Date(order.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
//                   </p>

                  
//                   <div className="mt-2">
//                     {/* <p className={`font-semibold ${getStatusColor(order.status || "Pending")}`}>
//                       Status: {order.status || "Pending"}
//                     </p> */}

//                     <div className="mt-2 flex items-center gap-2">
//                       <div className={`h-2 w-1/3 rounded ${order.status === "Pending" ? "bg-yellow-500" : "bg-green-500"}`}></div>
//                       <div className={`h-2 w-1/3 rounded ${order.status === "Shipping" || order.status === "Delivered" ? "bg-yellow-500" : "bg-gray-300"}`}></div>
//                       <div className={`h-2 w-1/3 rounded ${order.status === "Delivered" ? "bg-green-500" : "bg-gray-300"}`}></div>
//                     </div>

//                     <div className="flex justify-between text-xs text-gray-500 mt-1">
//                       <span>Pending</span>
//                       <span>Shipping</span>
//                       <span>Delivered</span>
//                     </div>
//                   </div>

//                   <p className="text-sm font-medium text-gray-700 mt-2">
//                     Total: ${order.total ? order.total.toFixed(2) : "0.00"}
//                   </p>
//                 </div>

//                 <div className="mt-4">
//                   {order.status === "Cancelled" ? (
//                     <button
//                       onClick={() => handleClearOrder(order.id)}
//                       className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg transition duration-200"
//                     >
//                       Clear Cancelled Order
//                     </button>
//                   ) : (
//                     <button
//                       onClick={() => handleCancelOrder(order.id)}
//                       className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-200"
//                     >
//                       Cancel Order
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  FaTrash,
  FaBox,
  FaShippingFast,
  FaTruck,
  FaCheckCircle,
  FaTimesCircle,
  FaBoxOpen,
} from "react-icons/fa";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const updateLocalStorage = (updated) => {
    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };

  // ✅ Cancel single order
  const handleCancelOrder = (orderId) => {
    Swal.fire({
      title: "Cancel this order?",
      text: "You won’t be able to undo this action.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Cancel",
      cancelButtonText: "No",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        const updated = orders.map((o) =>
          o.id === orderId ? { ...o, status: "Cancelled" } : o
        );
        updateLocalStorage(updated);
        Swal.fire("Cancelled!", "Your order has been cancelled.", "success");
      }
    });
  };

  // ✅ Clear all cancelled orders
  const handleClearCancelled = () => {
    const cancelledOrders = orders.filter((o) => o.status === "Cancelled");

    if (cancelledOrders.length === 0)
      return Swal.fire("No Cancelled Orders", "Nothing to clear!", "info");

    Swal.fire({
      title: "Clear all cancelled orders?",
      text: "This will permanently remove them from your history.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Clear",
      cancelButtonText: "No",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        const updated = orders.filter((o) => o.status !== "Cancelled");
        updateLocalStorage(updated);
        Swal.fire(
          "Cleared!",
          "All cancelled orders have been removed.",
          "success"
        );
      }
    });
  };

  // ✅ Step stages like Flipkart
  const steps = [
    { label: "Packed", icon: <FaBox /> },
    { label: "Shipped", icon: <FaShippingFast /> },
    { label: "Out for Delivery", icon: <FaTruck /> },
    { label: "Delivered", icon: <FaCheckCircle /> },
  ];

  const getStepIndex = (status) => steps.findIndex((s) => s.label === status);

  const getDeliveryText = (status, date) => {
    if (status === "Delivered") return `Delivered on ${date || "Expected date"}`;
    if (status === "Out for Delivery") return "Out for delivery today!";
    if (status === "Shipped" || status === "Packed")
      return `Expected by ${date || "3–5 days"}`;
    if (status === "Cancelled") return "Order has been cancelled.";
    return "";
  };

  if (orders.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-center text-gray-500">
        <FaBoxOpen className="text-7xl mb-4 text-gray-400" />
        <h2 className="text-2xl font-semibold">No Orders Yet</h2>
        <p>Looks like you haven’t placed any orders yet.</p>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen font-[Poppins]">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">📦 My Orders</h1>

        {orders.some((o) => o.status === "Cancelled") && (
          <button
            onClick={handleClearCancelled}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm shadow-md transition"
          >
            <FaTrash /> Clear Cancelled Orders
          </button>
        )}
      </div>

      {/* Order Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {orders.map((order) => {
          const currentStep = getStepIndex(order.status);

          return (
            <div
              key={order.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Header */}
              <div className="p-5 border-b bg-gradient-to-r from-blue-50 to-green-50 flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold text-gray-700">
                    Order #{order.id}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Placed on {new Date(order.date).toLocaleDateString()}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 text-sm font-medium rounded-full ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : order.status === "Cancelled"
                      ? "bg-red-100 text-red-600"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {order.status}
                </span>
              </div>

              {/* Items */}
              <div className="p-5 space-y-4">
                {order.items?.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center border-b pb-3"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-lg object-cover border"
                      />
                      <div>
                        <p className="text-gray-700 font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <p className="text-blue-600 font-semibold">
                      ₹{item.price}
                    </p>
                  </div>
                ))}
              </div>

              {/* Flipkart-style progress bar */}
              {order.status !== "Cancelled" && (
                <div className="px-6 py-5 bg-gray-50 border-t">
                  <div className="relative flex justify-between">
                    {steps.map((step, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center text-center w-1/4 z-10"
                      >
                        <div
                          className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                            i <= currentStep
                              ? "bg-green-500 border-green-500 text-white"
                              : "bg-white border-gray-300 text-gray-400"
                          }`}
                        >
                          {i < currentStep ? (
                            <FaCheckCircle className="text-white" />
                          ) : (
                            step.icon
                          )}
                        </div>
                        <p
                          className={`mt-2 text-sm ${
                            i <= currentStep
                              ? "text-green-600 font-semibold"
                              : "text-gray-500"
                          }`}
                        >
                          {step.label}
                        </p>
                      </div>
                    ))}
                    <div className="absolute top-4 left-8 right-8 h-1 bg-gray-200 z-0">
                      <div
                        className="h-1 bg-green-500 transition-all duration-700"
                        style={{
                          width: `${(currentStep / (steps.length - 1)) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm text-center mt-4">
                    {getDeliveryText(order.status, order.deliveryDate)}
                  </p>
                </div>
              )}

              {/* Footer */}
              <div className="p-5 flex justify-between items-center bg-gray-50 border-t">
                <p className="font-semibold text-gray-700">
                  Total: <span className="text-blue-600">₹{order.total}</span>
                </p>

                {order.status !== "Cancelled" &&
                  order.status !== "Delivered" && (
                    <button
                      onClick={() => handleCancelOrder(order.id)}
                      className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-lg flex items-center gap-2 transition"
                    >
                      <FaTimesCircle /> Cancel
                    </button>
                  )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
