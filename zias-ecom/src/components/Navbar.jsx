// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [cartItems, setCartItems] = useState([]);

  

//   useEffect(() => {
    
//     setCartItems(JSON.parse(localStorage.getItem("cart")) || []);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//     navigate("/login");
//   };

//   return (
//     <nav className="flex justify-between items-center px-6 py-4 bg-white text-white shadow-md sticky top-0 z-50">
    
//       <Link to="/" className="font-bold text-6xl text-gray-800 hover:text-gray-400 transition-colors ">
//          Shoosfie <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3L3P4a00NeetYnFePL1yEbcZBoYH5womCLdlcq4A8dF8NNekGUZzeJ1cNFBV3fMZmjw0&usqp=CAU"  alt=""style={{width:"30px",verticalAlign:"middle"}}/>
//       </Link>
//       <div className="flex items-center gap-4">
//         {user ? (
//           <>
//             <span className="text-gray-700">Hi, {user.name}</span>
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link
//               to="/login"
//               className="bg-black text-white px-3 py-1 rounded hover:bg-black-600"
//             >
//               Login
//             </Link>
//             <Link
//               to="/register"
//               className="bg-black text-white px-3 py-1 rounded hover:bg-black-600"
//             >
//               Register
//             </Link>
//           </>
//         )}
//         <Link to="/cart" className="relative text-gray-700">
//           🛒
//           {cartItems.length > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//               {cartItems.length}
//             </span>
//           )}
//         </Link>
//       </div>
//     </nav>
//   );
// }
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     // ✅ Load user and cart from localStorage
//     const loggedUser = JSON.parse(localStorage.getItem("user"));
//     if (loggedUser) setUser(loggedUser);

//     const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(savedCart);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//     navigate("/login");
//   };

//   return (
//     <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
//       <Link
//         to="/"
//         className="font-bold text-6xl text-gray-800 hover:text-gray-400 transition-colors flex items-center gap-2"
//       >
//         Shoosfie
//         <img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3L3P4a00NeetYnFePL1yEbcZBoYH5womCLdlcq4A8dF8NNekGUZzeJ1cNFBV3fMZmjw0&usqp=CAU"
//           alt=""
//           style={{ width: "30px", verticalAlign: "middle" }}
//         />
//       </Link>

//       <div className="flex items-center gap-4">
//         {user ? (
//           <>
//             <span className="text-gray-700">Hi, {user.name}</span>
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link
//               to="/login"
//               className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800"
//             >
//               Login
//             </Link>
//             <Link
//               to="/register"
//               className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800"
//             >
//               Register
//             </Link>
//           </>
//         )}

//         <Link to="/cart" className="relative text-gray-700">
//           🛒
//           {cartItems.length > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//               {cartItems.length}
//             </span>
//           )}
//         </Link>
//       </div>
//     </nav>
//   );
// // }



// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [cartItems, setCartItems] = useState([]);

  
//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser) setUser(storedUser);

//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(storedCart);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//     navigate("/login");
//   };

//   return (
//     <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
//       <Link
//         to="/"
//         className="font-bold text-4xl text-gray-800 hover:text-gray-500 flex items-center gap-2"
//       >
//         Shoosfie
//          <img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3L3P4a00NeetYnFePL1yEbcZBoYH5womCLdlcq4A8dF8NNekGUZzeJ1cNFBV3fMZmjw0&usqp=CAU"
//           alt="logo"
//           className="w-7 h-7" 
//         />
//       </Link>

//       <div className="flex items-center gap-4">
      
//         {user ? (
//           <>
//             <span className="text-gray-700 font-medium">
//               Hi, {user.name.split(" ")[0]}
//             </span>
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link
//               to="/login"
//               className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800"
//             >
//               Login
//             </Link>
//             <Link
//               to="/register"
//               className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800"
//             >
//               Register
//             </Link>
//           </>
//         )}

        
//         <Link to="/cart" className="relative text-gray-700 text-2xl">
//           🛒
//           {cartItems.length > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//               {cartItems.length}
//             </span>
//           )}
//         </Link>
//       </div>
//     </nav>
//   );
// }



// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [cartItems, setCartItems] = useState([]);
//   const [showProfile, setShowProfile] = useState(false);

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser) setUser(storedUser);

//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(storedCart);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//     setShowProfile(false);
//     navigate("/login");
//   };

//   return (
//     <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md sticky top-0 z-50">
//       <Link
//         to="/"
//         className="font-bold text-4xl text-gray-800 hover:text-gray-500 flex items-center gap-2"
//       >
//         Shoosfie
//         <img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3L3P4a00NeetYnFePL1yEbcZBoYH5womCLdlcq4A8dF8NNekGUZzeJ1cNFBV3fMZmjw0&usqp=CAU"
//           alt="logo"
//           className="w-7 h-7"
//         />
//       </Link>

//       <div className="flex items-center gap-6 ml-auto relative">
//         {user ? (
//           <>
//             <button
//               onClick={() => setShowProfile(!showProfile)}
//               className="flex items-center gap-2 text-gray-700 font-medium hover:bg-gray-100 px-3 py-1 rounded transition"
//             >
//               Hi, {user.name.split(" ")[0]}
//               <img
//                 src={user.avatar || "WIN_20251005_14_50_52_Pro.jpg"}
//                 alt="avatar"
//                 className="w-8 h-8 rounded-full object-cover"
//               />
//             </button>

//             {showProfile && (
//               <div className="absolute right-0 mt-12 w-48 bg-white border rounded shadow-lg z-10 overflow-hidden">
//                 <Link
//                   to="/profile"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                   onClick={() => setShowProfile(false)}
//                 >
//                   Profile
//                 </Link>
//                 <Link
//                   to="/orders"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                   onClick={() => setShowProfile(false)}
//                 >
//                   Orders
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="w-full text-left px-4 py-2 hover:bg-gray-100"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </>
//         ) : (
//           <>
//             <Link
//               to="/login"
//               className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800"
//             >
//               Login
//             </Link>
//             <Link
//               to="/register"
//               className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800"
//             >
//               Register
//             </Link>
//           </>
//         )}

//         <Link to="/cart" className="relative text-gray-700 text-2xl ">
//           🛒
//           {cartItems.length > 0 && (
//             <span className="absolute -top-2 -right-2  text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//               {cartItems.length}
//             </span>
//           )}
//         </Link>
//       </div>
//     </nav>
//   );
// }


// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [cartItems, setCartItems] = useState([]);
//   const [showProfile, setShowProfile] = useState(false);

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser) setUser(storedUser);

//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(storedCart);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//     setShowProfile(false);
//     navigate("/login");
//   };

//   return (
//     <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md sticky top-0 z-50">
//       <Link
//         to="/"
//         className="font-bold text-4xl text-gray-800 hover:text-gray-500 flex items-center gap-2"
//       >
//         Shoosfie
//         <img
//           src="https://www.logoai.com/logo/6625480"
//           alt="logo"
//           className="w-7 h-7"
//         />
//       </Link>

//       <div className="flex items-center gap-6 ml-auto relative">
//         {user ? (
//           <>
//             <button
//               onClick={() => setShowProfile(!showProfile)}
//               className="flex items-center gap-2 text-gray-700 font-medium px-3 py-1 rounded transition"
//             >
//               {/* Hi, {user.name.split(" ")[0]} */}
//               <img
//                 src="https://i.pinimg.com/564x/80/19/8a/80198ac907ca3dd1ff81d6579d46a560.jpg"
//                 alt=""
//                 className="w-10 h-10 rounded-full"
//               />
//             </button>

//             {showProfile && (
//               <div className="absolute right-0 mt-12 w-64 bg-white border rounded-lg shadow-lg z-10 overflow-hidden">
//                 <div className="flex flex-col items-center p-4 border-b">
//                   {/* <img
//                     src={user.avatar || "WIN_20251005_14_50_52_Pro.jpg"}
//                     alt="avatar"
//                     className="w-16 h-16 rounded-full object-cover mb-2"
//                   /> */}
//                   <h3 className="text-lg font-semibold">{user.name}</h3>
//                   <p className="text-gray-500 text-sm">{user.email}</p>
//                   {user.address && (
//                     <p className="text-gray-500 text-sm mt-1">{user.address}</p>
//                   )}
//                 </div>

//                 <div className="flex flex-col">
//                   <Link
//                     to="/profile"
//                     className="block px-4 py-2 hover:bg-gray-100"
//                     onClick={() => setShowProfile(false)}
//                   >
//                     Edit Profile
//                   </Link>
//                   <Link
//                     to="/orders"
//                     className="block px-4 py-2 hover:bg-gray-100"
//                     onClick={() => setShowProfile(false)}
//                   >
//                     Orders
//                   </Link>
//                   <button
//                     onClick={handleLogout}
//                     className="w-full text-left px-4 py-2 hover:bg-gray-100"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             )}
//           </>
//         ) : (
//           <>
//             <Link
//               to="/login"
//               className="bg-gray text-white px-3 py-1 rounded hover:bg-gray-200"
//             >
//               Login
//             </Link>
//             <Link
//               to="/register"
//               className="bg-gray text-white px-3 py-1 rounded hover:bg-gray-200"
//             >
//               Register
//             </Link>
//           </>
//         )}

//         <Link to="/cart" className="relative text-gray-700 text-2xl ">
//           🛒
//           {cartItems.length > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//               {cartItems.length}
//             </span>
//           )}
//         </Link>
//       </div>
//     </nav>
//   );
// }



// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [cartItems, setCartItems] = useState([]);
//   const [search, setSearch] = useState("");
//   const [showProfile, setShowProfile] = useState(false);

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser) setUser(storedUser);

//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(storedCart);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//     setShowProfile(false);
//     navigate("/login");
//   };

//   // const handleSearch = (e) => {
//   //   e.preventDefault();
//   //   if (search.trim()) {
//   //     navigate(`/products?search?=${search}`);
//   //   }
//   // };

//   return (
//     <nav className="bg-white text-white shadow-md sticky top-0 z-50">
//       <div className="max-w-8xl mx-auto px-4">
//         <div className="flex justify-between items-center h-25">
//           <div className="flex-shrink-0">
//             <Link to="/" className="text-2xl font-bold flex items-center gap-2">
              
//               <img
//                 src="https://www.logoai.com/uploads/output/2025/10/21/42c1e833f6e6d87741044c27598f9180.jpg?t=1761029973"
//                 alt="logo"
//                 className="w-56 h-20"
//               />
//             </Link>
//           </div>

          
//           <div className="hidden md:flex space-x-9">
//             <Link to="/collections/men" className="hover:underline">
//               Men
//             </Link>
//             <Link to="/collections/women" className="hover:underline">
//               Women
//             </Link>
//             <Link to="/collections/kids" className="hover:underline">
//               Kids
//             </Link>
//           </div>

          
//           <div className="flex items-center space-x-4">
            
//             {/* <form onSubmit={handleSearch}>
//               <input
//                 type="text"
//                 placeholder="Search"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="rounded-full px-4 py-1 w-64 text-black focus:outline-none focus:ring-2 focus:ring-white"
//               />
//             </form> */}

            
//             {user ? (
//               <div className="relative">
//                 <button
//                   onClick={() => setShowProfile(!showProfile)}
//                   className="flex items-center gap-2 bg-transparent hover:bg-transparent focus:outline-none"
//                 >
//                   <span role="img" aria-label="profile" className="text-2xl">
//                     👤
//                   </span>
//                 </button>

//                 {showProfile && (
//                   <div className="absolute right-0 mt-12 w-56 bg-white text-black rounded-lg shadow-lg overflow-hidden z-10">
//                     <div className="flex flex-col items-center p-4 border-b">
//                       <h3 className="text-lg font-semibold">{user.name}</h3>
//                       <p className="text-gray-500 text-sm">{user.email}</p>
//                     </div>
//                     <div className="flex flex-col">
//                       <Link
//                         to="/profile"
//                         className="block px-4 py-2 hover:bg-gray-100"
//                         onClick={() => setShowProfile(false)}
//                       >
//                         Edit Profile
//                       </Link>
//                       <Link
//                         to="/orders"
//                         className="block px-4 py-2 hover:bg-gray-100"
//                         onClick={() => setShowProfile(false)}
//                       >
//                         Orders
//                       </Link>
//                       <button
//                         onClick={handleLogout}
//                         className="w-full text-left px-4 py-2 hover:bg-gray-100"
//                       >
//                         Logout
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <div className="hidden md:flex gap-2">
//                 <Link
//                   to="/login"
//                   className="px-3 py-1 rounded hover:bg-gray-700 transition"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   to="/register"
//                   className="px-3 py-1 rounded hover:bg-gray-700 transition"
//                 >
//                   Register
//                 </Link>
//               </div>
//             )}

          
//             <div
//               className="relative cursor-pointer text-2xl"
//               onClick={() => navigate("/cart")}
//             >
//               <span role="img" aria-label="cart">
//                 🛒
//               </span>
//               {cartItems.length > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//                   {cartItems.length}
//                 </span>
//               )}
//             </div>
//           </div>
//         </div>

        
//       </div>
      
//     </nav>
    
//   );
// }





// import React, { useState, useEffect, useRef } from "react";
// import { Link, replace, useNavigate } from "react-router-dom";
// import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
// import logo from "../assets/Shoosifie.png"

// export default function Navbar() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [cartItems, setCartItems] = useState([]);
//   const [showProfile, setShowProfile] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser) setUser(storedUser);

//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(storedCart);
//   }, []);

  
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowProfile(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//     setShowProfile(false);
//     navigate("/login",{replace:true});

//     window.history.pushState(null, "", window.location.href);
//     window.onpopstate = () => window.history.go(1);
//     };

  
  
  

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-8xl mx-auto px-4">
//         <div className="flex justify-between items-center h-25">
          
//           <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate("/")}>
//             <img 
//               src={logo}
//               alt="logo"
//               className="w-90 h-25 flex"
//             />

//           </div>

// {/*           
//           <div className="hidden md:flex space-x-9">
//             <Link to="/collections/men" className="hover:underline">Men</Link>
//             <Link to="/collections/women" className="hover:underline">Women</Link>
//             <Link to="/collections/kids" className="hover:underline">Kids</Link>
//           </div> */}

          
//           <div className="flex items-center space-x-4">
          
//             {/* <form onSubmit={handleSearch} className="hidden md:block">
//               <input
//                 type="text"
//                 placeholder="Search for products, brands..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="rounded-full px-4 py-1 w-64 text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//             </form> */}

            
//             <div className="relative" ref={dropdownRef}>
//               {user ? (
//                 <button
//                   onClick={() => setShowProfile(!showProfile)}
//                   className="flex items-center bg-transparent focus:outline-none"
//                 >
//                   <FaUserCircle className="text-2xl cursor-pointer" />
//                 </button>
//               ) : (
//                 <div className="hidden md:flex gap-2">
//                   <Link to="/login" className="px-3 py-1 rounded hover:bg-gray-200 transition">Login</Link>
//                   <Link to="/register" className="px-3 py-1 rounded hover:bg-gray-200 transition">Register</Link>
//                 </div>
//               )}

//               {showProfile && user && (
//                 <div className="absolute right-0 mt-12 w-56 bg-white text-black rounded-lg shadow-lg overflow-hidden z-50">
//                   <div className="flex flex-col items-center p-4 border-b">
//                     <h3 className="text-lg font-semibold">{user.name}</h3>
//                     <p className="text-gray-500 text-sm">{user.email}</p>
//                   </div>
//                   <div className="flex flex-col">
//                     <Link
//                       to="/profile"
//                       className="block px-4 py-2 hover:bg-gray-100"
//                       onClick={() => setShowProfile(false)}
//                     >
//                       Edit Profile
//                     </Link>
//                     <Link
//                       to="/orders"
//                       className="block px-4 py-2 hover:bg-gray-100"
//                       onClick={() => setShowProfile(false)}
//                     >
//                       Orders
//                     </Link>
//                     <button
//                       onClick={handleLogout}
//                       className="w-full text-left px-4 py-2 hover:bg-gray-100"
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>

            

            
//             <div
//               className="relative cursor-pointer text-2xl"
//               onClick={() => navigate("/cart")}
//             >
//               <FaShoppingCart />
//               {cartItems.length > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//                   {cartItems.length}
//                 </span>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }








import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, ShoppingBag, Heart } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import logo from "../assets/Shoosifie02.png";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);

  const user = useSelector((state) => state.auth?.user);
  const cartItems = useSelector((state) => state.cart);

  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    setShowProfile(false);
    navigate("/login", { replace: true });

    window.history.pushState(null, "", window.location.href);
    window.onpopstate = () => window.history.go(1);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate("/")}>
            <img src={logo} alt="Shoosifie Logo" className="w-44 sm:w-52 lg:w-60 h-auto" />
          </div>

          
          <div className="flex items-center space-x-4 sm:space-x-6 text-xl">
            
            <div className="relative" ref={dropdownRef}>
              {user ? (
                <button
                  onClick={() => setShowProfile(!showProfile)}
                  className="flex items-center bg-transparent focus:outline-none"
                  aria-label="User Menu"
                >
                  <User className="w-6 h-6 text-black hover:text-gray-900 transition" />
                </button>
              ) : (
                <div className="hidden md:flex gap-2">
                  <Link to="/login" className="px-3 py-1 rounded hover:bg-gray-200 transition">Login</Link>
                  <Link to="/register" className="px-3 py-1 rounded hover:bg-gray-200 transition">Register</Link>
                </div>
              )}

              {showProfile && user && (
                <div className="absolute right-0 mt-12 w-56 bg-white text-black rounded-lg shadow-lg overflow-hidden z-50">
                  <div className="flex flex-col items-center p-4 border-b">
                    <h3 className="text-lg font-semibold">{user.name}</h3>
                    <p className="text-gray-500 text-sm">{user.email}</p>
                  </div>
                  <div className="flex flex-col text-[15px] font-medum">
                    <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setShowProfile(false)}>Edit Profile</Link>
                    <Link to="/orders" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setShowProfile(false)}>Orders</Link>
                    <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
                  </div>
                </div>
              )}
            </div>

            
            <div
              className="cursor-pointer relative"
              onClick={() => navigate("/wishlist")}
              aria-label="Wishlist"
            >
              <Heart className="w-6 h-6 text-black hover:text-gray-900 transition" />
            </div>

          
            <div
              className="relative cursor-pointer"
              onClick={() => navigate("/cart")}
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-6 h-6 text-black hover:text-gray-900 transition" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
