import React, { useState, useEffect } from "react";
import {
  FaUserCog,
  FaLock,
  FaBell,
  FaSave,
  FaEnvelope,
  FaUser,
  FaCamera,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import Swal from "sweetalert2";

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    name: "Admin User",
    email: "admin@example.com",
    password: "adminpass",
    notifications: true,
    theme: localStorage.getItem("theme") || "light",
    profilePhoto: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  });

  
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(settings.theme);
    localStorage.setItem("theme", settings.theme);
  }, [settings.theme]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "✅ Settings Updated!",
      text: "Your preferences have been successfully saved.",
      icon: "success",
      confirmButtonColor: "#4f46e5",
    });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setSettings((prev) => ({
          ...prev,
          profilePhoto: ev.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={`p-8 min-h-screen transition-all duration-300 ${
        settings.theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"
      }`}
    >
      <div
        className={`max-w-4xl mx-auto rounded-2xl shadow-lg border ${
          settings.theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
        }`}
      >
  
        <div
          className={`p-6 border-b flex items-center justify-between ${
            settings.theme === "dark" ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <FaUserCog className="text-indigo-500" /> Admin Settings
          </h2>
          <span className="text-sm opacity-70">Last updated: Just now</span>
        </div>

      
        <div
          className={`p-6 flex flex-col items-center gap-4 border-b ${
            settings.theme === "dark" ? "border-gray-700" : "border-gray-100"
          }`}
        >
          <div className="relative">
            <img
              src={settings.profilePhoto}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-indigo-100 shadow-md"
            />
            <label
              htmlFor="profileUpload"
              className="absolute bottom-1 right-1 bg-indigo-500 text-white p-2 rounded-full cursor-pointer hover:bg-indigo-600 transition"
            >
              <FaCamera />
              <input
                id="profileUpload"
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </label>
          </div>
          <h3 className="text-lg font-semibold">{settings.name}</h3>
          <p className="text-sm opacity-80">{settings.email}</p>
        </div>

        
        <form onSubmit={handleSave} className="p-6 space-y-8">
        
          <section>
            <h3 className="text-lg font-semibold mb-4">Profile Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 mb-1 font-medium">
                  <FaUser /> Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={settings.name}
                  onChange={handleChange}
                  className={`w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-400 focus:outline-none ${
                    settings.theme === "dark"
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "border-gray-300"
                  }`}
                />
              </div>

              <div>
                <label className="flex items-center gap-2 mb-1 font-medium">
                  <FaEnvelope /> Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={settings.email}
                  onChange={handleChange}
                  className={`w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-400 focus:outline-none ${
                    settings.theme === "dark"
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "border-gray-300"
                  }`}
                />
              </div>
            </div>
          </section>

    
          <section>
            <h3 className="text-lg font-semibold mb-4">Security</h3>
            <div>
              <label className="flex items-center gap-2 mb-1 font-medium">
                <FaLock /> Change Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter new password"
                value={settings.password}
                onChange={handleChange}
                className={`w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-400 focus:outline-none ${
                  settings.theme === "dark"
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "border-gray-300"
                }`}
              />
            </div>
          </section>

    
          <section>
            <h3 className="text-lg font-semibold mb-4">Appearance</h3>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setSettings((p) => ({ ...p, theme: "light" }))}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition ${
                  settings.theme === "light"
                    ? "border-indigo-500 bg-indigo-50 text-indigo-600"
                    : "border-gray-500 hover:bg-gray-600 hover:text-white"
                }`}
              >
                <FaSun /> Light Mode
              </button>
              <button
                type="button"
                onClick={() => setSettings((p) => ({ ...p, theme: "dark" }))}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition ${
                  settings.theme === "dark"
                    ? "border-indigo-500 bg-indigo-50 text-indigo-600"
                    : "border-gray-500 hover:bg-gray-600 hover:text-white"
                }`}
              >
                <FaMoon /> Dark Mode
              </button>
            </div>
          </section>

          
          <section className="flex items-center justify-between border-t pt-6">
            <div className="flex items-center gap-3">
              <FaBell className="text-indigo-500 text-lg" />
              <div>
                <h4 className="font-semibold">Notifications</h4>
                <p className="text-sm opacity-70">
                  Receive order and user activity alerts.
                </p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="notifications"
                checked={settings.notifications}
                onChange={handleChange}
                className="sr-only peer"
              />
              <div className="w-12 h-6 bg-gray-300 rounded-full peer peer-checked:bg-indigo-500 transition"></div>
              <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full peer-checked:translate-x-6 transition"></span>
            </label>
          </section>

    
          <div className="pt-6 border-t">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-500 hover:opacity-90 text-white py-3 rounded-lg font-semibold text-lg transition"
            >
              <FaSave /> Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
