// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ email: "", password: "" });

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.get(
//         `http://localhost:5000/users?email=${form.email}&password=${form.password}`
//       );

//       if (res.data.length === 0) {
//         alert("Invalid email or password!");
//         return;
//       }

//       const user = res.data[0];

//       if (user.status !== "active") {
//         alert("Your account is inactive. Contact admin.");
//         return;
//       }

//       localStorage.setItem("user", JSON.stringify(user));
//       alert(`Welcome, ${user.name}!`);
//       navigate("/");
//     } catch (err) {
//       console.error("Login failed:", err);
//       alert("Login failed!");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-20 p-4 border rounded">
//       <h2 className="text-2xl font-bold mb-4">Login</h2>
//       <form onSubmit={handleLogin} className="flex flex-col gap-2">
//         <input
//           type="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//           className="border p-2 rounded"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={(e) => setForm({ ...form, password: e.target.value })}
//           className="border p-2 rounded"
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white p-2 rounded mt-2"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }


import React, { useState } from "react";
import axios from "axios";
import { useNavigate,Link} from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `http://localhost:5001/users?email=${form.email}&password=${form.password}`
      );

      if (res.data.length === 0) {
        alert("Invalid email or password!");
        return;
      }

      const user = res.data[0];

      if (user.status !== "active") {
        alert("Your account is inactive. Contact admin.");
        return;
      }

      localStorage.setItem("user", JSON.stringify(user));
      alert(`Welcome, ${user.name}!`);
      navigate("/");
    } catch (err) {
      console.error("Login failed:", err);
      alert("Login failed!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back 👟
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
