// import React, { useState } from "react";
// import axios from "axios";   
// import { useNavigate } from "react-router-dom";

// export default function Register() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ name: "", email: "", password: "" });

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
      
//       const existingUsers = await axios.get(
//         `http://localhost:5000/users?email=${form.email}`
//       );

//       if (existingUsers.data.length > 0) {
//         alert("Email already registered!");
//         return;
//       }

//       const res = await axios.post("http://localhost:5000/users", {
//         ...form,
//         role: "user",
//         status: "active",
//       });

//       console.log(res.data);
//       alert("Registered successfully!");
//       navigate("/login");
//     } catch (err) {
//       console.error("Registration failed:", err);
//       alert("Registration failed!");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-20 p-4 border rounded">
//       <h2 className="text-2xl font-bold mb-4">Register</h2>
//       <form onSubmit={handleRegister} className="flex flex-col gap-2">
//         <input
//           placeholder="Name"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           className="border p-2 rounded"
//         />
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
//           className="bg-green-500 text-white p-2 rounded mt-2"
//         >
//           Register
//         </button>
//       </form>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate ,Link} from "react-router-dom";

// export default function Register() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ name: "", email: "", password: "" });

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const { data: existingUsers } = await axios.get(
//         `http://localhost:5000/users?email=${form.email}`
//       );

//       if (existingUsers.length > 0) {
//         alert("Email already registered!");
//         return;
//       }

//       await axios.post("http://localhost:5000/users", {
//         ...form,
//         role: "user",
//         status: "active",
//       });

//       alert("Registered successfully!");
//       navigate("/login");
//     } catch (err) {
//       console.error("Registration failed:", err);
//       alert("Registration failed!");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-blue-100">
//       <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           Create Account 👟
//         </h2>
//         <form onSubmit={handleRegister} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Full Name"
//             value={form.name}
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//             className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
//           />
//           <input
//             type="email"
//             placeholder="Email Address"
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//             className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={(e) => setForm({ ...form, password: e.target.value })}
//             className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
//           >
//             Register
//           </button>
//         </form>
//         <p className="text-center text-gray-600 mt-4">
//           Already have an account?{" "}
//           <Link to="/login" className="text-blue-600 hover:underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }






import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data: existingUsers } = await axios.get(
        `http://localhost:5000/users?email=${form.email}`
      );

      if (existingUsers.length > 0) {
        alert("Email already registered!");
        return;
      }

      await axios.post("http://localhost:5000/users", {
        ...form,
        role: "user",
        status: "active",
      });

      alert("Registered successfully!");
      navigate("/login");
    } catch (err) {
      console.error("Registration failed:", err);
      alert("Registration failed!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-gray-50 to-blue-100">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Account 
        </h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
          />
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
            className="w-full bg-gradient-to-r from-black to-indigo-500 text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition duration-200"
          >
            Register
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

