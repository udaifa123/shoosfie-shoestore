import React, { useEffect, useState } from "react";
import { getOrders } from "../services/api";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);

    if (storedUser) {
      getOrders()
        .then((res) => {
          const userOrders = res.data.filter((o) => o.userId === storedUser.id);
          setOrders(userOrders);
        })
        .catch((err) => console.error(err));
    }
  }, []);

  if (!user) return <p className="p-6 text-center text-gray-700">Login to view your orders.</p>;
  if (orders.length === 0) return <p className="p-6 text-center text-gray-700">No orders yet.</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="border p-4 rounded">
            <p className="text-gray-600 text-sm">{new Date(order.date).toLocaleString()}</p>
            <ul className="mt-2 space-y-1">
              {order.items.map((item) => (
                <li key={item.id}>{item.name} x {item.quantity || 1} - ${item.price}</li>
              ))}
            </ul>
            <p className="font-bold mt-2">Total: ${order.total.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
