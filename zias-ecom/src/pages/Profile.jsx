import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
  FaCamera,
  FaHeart,
  FaBoxOpen,
  FaPhoneAlt,
  FaEnvelope,
  FaSun,
  FaMoon,
} from "react-icons/fa";

export default function Profile() {
  const [darkMode, setDarkMode] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    photo: "",
  });
  const [orders, setOrders] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // ✅ Load profile from localStorage every time
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (storedUser) setForm(storedUser);
    setOrders(storedOrders);
    setWishlist(storedWishlist);
  }, []);

  // ✅ Update form state when editing
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Upload profile photo
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prev) => ({ ...prev, photo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // ✅ Save profile permanently in localStorage
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form));
    Swal.fire({
      icon: "success",
      title: "Profile Saved",
      text: "Your profile data is stored permanently.",
      confirmButtonColor: "#000",
      background: darkMode ? "#222" : "#f9fafb",
      color: darkMode ? "#fff" : "#000",
    });
  };

  const toggleMode = () => setDarkMode((prev) => !prev);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      } min-h-screen transition-all`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-5 bg-gradient-to-r from-black to-indigo-600 text-white shadow-lg">
        <h2 className="text-3xl font-bold tracking-tight">My Profile</h2>
        <button
          onClick={toggleMode}
          className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition"
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>

      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 mt-8 rounded-3xl shadow-2xl overflow-hidden">
        {/* Profile Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10"
        >
          {/* Left Side */}
          <div className="space-y-6">
            {["name", "email", "phone"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-semibold capitalize">
                  {field}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-transparent"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-semibold">Address</label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                rows={3}
                className="mt-2 w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-transparent"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center justify-center space-y-6">
            {form.photo ? (
              <img
                src={form.photo}
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
              />
            ) : (
              <div className="w-40 h-40 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full border border-gray-400">
                <FaCamera className="text-gray-500 text-3xl" />
              </div>
            )}

            <label className="mt-2 cursor-pointer bg-gradient-to-r from-black to-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition">
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
              />
              Upload Photo
            </label>

            {/* Contact Buttons */}
            <div className="flex gap-4 mt-4">
              {form.phone && (
                <button
                  type="button"
                  onClick={() => window.open(`tel:${form.phone}`, "_self")}
                  className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:opacity-90 transition"
                >
                  <FaPhoneAlt /> Call
                </button>
              )}
              {form.email && (
                <button
                  type="button"
                  onClick={() => window.open(`mailto:${form.email}`, "_self")}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:opacity-90 transition"
                >
                  <FaEnvelope /> Email
                </button>
              )}
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-gradient-to-r from-black to-indigo-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:opacity-90"
            >
              Save Changes
            </button>
          </div>
        </form>

        {/* Orders */}
        <div className="p-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FaBoxOpen /> My Orders
          </h3>
          {orders.length === 0 ? (
            <p className="text-gray-500">No past orders found.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {orders.map((o) => (
                <div
                  key={o.id}
                  className="border rounded-xl p-4 bg-gray-50 dark:bg-gray-700 hover:shadow-md transition"
                >
                  <h4 className="font-semibold">Order #{o.id}</h4>
                  <p className="text-sm text-gray-500 mb-1">{o.date}</p>
                  <p className="font-medium">₹{o.total}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Wishlist */}
        <div className="p-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-pink-600">
            <FaHeart /> My Wishlist
          </h3>
          {wishlist.length === 0 ? (
            <p className="text-gray-500">Your wishlist is empty.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlist.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-xl p-4 bg-white dark:bg-gray-700 hover:shadow-md transition"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-cover rounded-lg mb-3"
                  />
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    ₹{item.price}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
