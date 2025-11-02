// import React from "react";
// import { Link, Outlet, useNavigate } from "react-router-dom";

// export default function AdminDashboard() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("user");
    
    
//     navigate("/login",{replace:true});
//   };

// return (
//     <div>
//       <nav style={{ display: "flex", gap: "20px", padding: "10px", borderBottom: "1px solid #ccc" }}>
//         <Link to="/admin/products">Products</Link>
//         <Link to="/admin/users">Users</Link>
//         <button onClick={handleLogout}>Logout</button>
//       </nav>
//       <div style={{ padding: "20px" }}>
//         <Outlet />
//       </div>
//     </div>
//   );
// }





import React from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  FaBox,
  FaUsers,
  FaShoppingCart,
  FaSignOutAlt,
  FaChartPie,
  FaUserCog,
} from "react-icons/fa";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  const menuItems = [
    { name: "Overview", path: "/admin/overview", icon: <FaChartPie /> },
    { name: "Products", path: "/admin/products", icon: <FaBox /> },
    { name: "Users", path: "/admin/users", icon: <FaUsers /> },
    { name: "Orders", path: "/admin/orders", icon: <FaShoppingCart /> },
    { name: "Analytics", path: "/admin/analytics", icon: <FaChartPie /> },
    { name: "Settings", path: "/admin/settings", icon: <FaUserCog /> }, // ✅ Added Settings
  ];

  const getPageTitle = () => {
    if (location.pathname.includes("/admin/overview")) return "Dashboard Overview";
    if (location.pathname.includes("/admin/products")) return "Manage Products";
    if (location.pathname.includes("/admin/users")) return "Manage Users";
    if (location.pathname.includes("/admin/orders")) return "Manage Orders";
    if (location.pathname.includes("/admin/analytics")) return "Admin Analytics";
    if (location.pathname.includes("/admin/settings")) return "Admin Settings"; // ✅ Added
    return "Admin Panel";
  };

  return (
    <div className="min-h-screen flex bg-gray-100 font-sans">
      
      <aside className="w-64 bg-white shadow-lg border-r border-gray-200 fixed h-full">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-extrabold tracking-wide text-gray-900">
            Shoosifie<span className="text-indigo-500"> Admin</span>
          </h1>
        </div>

        <nav className="mt-6 space-y-2 px-3">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition font-medium ${
                location.pathname === item.path
                  ? "bg-indigo-100 text-indigo-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-6 w-full px-6">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-500 hover:opacity-90 text-white py-2.5 rounded-lg font-semibold transition"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </aside>

      
      <div className="flex-1 ml-64 flex flex-col">
        <header className="bg-white shadow-sm py-3 px-6 flex justify-between items-center sticky top-0 z-10">
          <h2 className="text-xl font-semibold text-gray-800">{getPageTitle()}</h2>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-500 text-white flex items-center justify-center rounded-full font-bold">
              A
            </div>
            <span className="text-gray-700 font-medium">Admin</span>
          </div>
        </header>

        <main className="flex-1 p-6 bg-gray-50 min-h-[calc(100vh-60px)]">
          <Outlet /> 
        </main>
      </div>
    </div>
  );
}
