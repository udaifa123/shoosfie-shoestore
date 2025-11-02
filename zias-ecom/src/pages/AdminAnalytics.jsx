import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  FaArrowUp,
  FaRupeeSign,
  FaUsers,
  FaShoppingCart,
} from "react-icons/fa";

const API_URL = "http://localhost:5000/orders";
const USER_URL = "http://localhost:5000/users"; 

export default function AdminAnalytics() {
  const [analytics, setAnalytics] = useState({
    monthlyData: [],
    categoryData: [],
    totalRevenue: 0,
    totalOrders: 0,
    totalUsers: 0,
    growth: 0,
    recentOrders: [],
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const [ordersRes, usersRes] = await Promise.all([
          fetch(API_URL),
          fetch(USER_URL),
        ]);

        const orders = await ordersRes.json();
        const users = await usersRes.json();


        const monthlyMap = {};
        orders.forEach((order) => {
          const date = new Date(order.date);
          const month = date.toLocaleString("default", { month: "short" });
          if (!monthlyMap[month]) monthlyMap[month] = { month, orders: 0, revenue: 0 };
          monthlyMap[month].orders += 1;
          monthlyMap[month].revenue += Number(order.total || 0);
        });
        const monthlyData = Object.values(monthlyMap);

    
        const categoryMap = {};
        orders.forEach((order) => {
          if (!categoryMap[order.category])
            categoryMap[order.category] = { name: order.category, value: 0 };
          categoryMap[order.category].value += Number(order.total || 0);
        });
        const categoryData = Object.values(categoryMap);

        
        const totalRevenue = orders.reduce((sum, o) => sum + Number(o.total || 0), 0);
        const totalOrders = orders.length;
        const totalUsers = users.length || 0;

  
        const growth =
          monthlyData.length > 1
            ? Math.round(
                ((monthlyData[monthlyData.length - 1].orders -
                  monthlyData[monthlyData.length - 2].orders) /
                  monthlyData[monthlyData.length - 2].orders) *
                  100
              )
            : 0;

      
        const recentOrders = [...orders]
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 5);

        setAnalytics({
          monthlyData,
          categoryData,
          totalRevenue,
          totalOrders,
          totalUsers,
          growth,
          recentOrders,
        });
      } catch (err) {
        console.error("Error loading analytics:", err);
      }
    };

    loadData();
  }, []);

  const COLORS = ["#6366F1", "#34D399", "#F59E0B", "#EF4444"];

  return (
    <div className="space-y-10 font-[Inter] p-6 md:p-10">
      <h1 className="text-3xl font-bold text-gray-800">📊 Admin Analytics Dashboard</h1>
      <p className="text-gray-500 mb-6">
        Monitor store performance, sales trends, and growth in real-time.
      </p>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <p className="text-gray-500">Total Revenue</p>
          <h2 className="text-2xl font-bold flex items-center gap-1 text-green-600">
            <FaRupeeSign /> {analytics.totalRevenue.toLocaleString()}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <p className="text-gray-500">Total Orders</p>
          <h2 className="text-2xl font-bold flex items-center gap-2 text-blue-600">
            <FaShoppingCart /> {analytics.totalOrders}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <p className="text-gray-500">Total Users</p>
          <h2 className="text-2xl font-bold flex items-center gap-2 text-purple-600">
            <FaUsers /> {analytics.totalUsers}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <p className="text-gray-500">Order Growth</p>
          <h2 className="text-2xl font-bold text-green-700 flex items-center gap-2">
            +{analytics.growth}% <FaArrowUp />
          </h2>
        </div>
      </div>

      
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Monthly Orders Trend</h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={analytics.monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="orders" stroke="#6366F1" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>


      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Monthly Revenue</h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={analytics.monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#34D399" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Category-wise Revenue</h2>
        <div className="h-72 flex justify-center">
          <ResponsiveContainer width="70%" height="100%">
            <PieChart>
              <Pie
                data={analytics.categoryData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {analytics.categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border">Order ID</th>
              <th className="p-3 border">Category</th>
              <th className="p-3 border">Total (₹)</th>
              <th className="p-3 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {analytics.recentOrders.map((o) => (
              <tr key={o.id} className="hover:bg-gray-50">
                <td className="p-3 border">{o.id}</td>
                <td className="p-3 border">{o.category || "N/A"}</td>
                <td className="p-3 border">{o.total?.toLocaleString()}</td>
                <td className="p-3 border">{o.date}</td>
              </tr>
            ))}
            {analytics.recentOrders.length === 0 && (
              <tr>
                <td colSpan={4} className="p-3 text-center text-gray-500">
                  No recent orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
