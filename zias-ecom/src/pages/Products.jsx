// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// export default function ProductsPage() {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("");
//   const [sortOption,setSortOption]=useState("");
//   const [cart, setCart] = useState(
//     JSON.parse(localStorage.getItem("cart")) || []
//   );

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/products")
//       .then((res) => setProducts(res.data))
//       .catch((err) => console.error("Error fetching products:", err));
//   }, []);

//   const addToCart = (product) => {
//     const newCart = [...cart, product];
//     setCart(newCart);
//     localStorage.setItem("cart", JSON.stringify(newCart));
//   };

//   const filtered = products.filter(
//     (p) =>
//       p.name?.toLowerCase().includes(search.toLowerCase()) &&
//       (category
//         ? p.category.toLowerCase() === category.toLowerCase()
//         : true) &&
//       p.status === true
//   )

//   .sort((a,b)=>{
//      if(sortOption==="price-asc")return a.price-b.price;
//      if(sortOption==="price-desc")return b.price-a.price;
//      if(sortOption==="newwst")return new Date(b.date)-new Date(a.date);
//      return 0;
//   })

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50 relative">
//       {/* {cartMessage && (
//         <div className="fixed top-6 right-6 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce z-50">
//           </div>
//       )}
//        */}
//       <div className="flex flex-col md:flex-row gap-4 mb-6 items-center p-6">
//         <input
//           placeholder="Search products..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="flex-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
//         />
//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
//         >
//           <option value="">All Categories</option>
//           <option value="shoes">Shoes</option>
//           <option value="boots">Boots</option>
//           <option value="sneakers">Sneakers</option>

//         </select>

//         <select
//          value={sortOption}
//          onChange={(e)=>setSortOption(e.target.value)}
//          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
//          >
//           <option value="">Sort By</option>
//           <option value="price-asc">Price:Low to High</option>
//           <option value="price-desc">Price:High to Low</option>
//           <option value="newest">Newest Arrivals</option>
//         </select>
//       </div>

      
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-6 pb-6 flex-1">
//         {filtered.map((p) => (
//           <div
//             key={p.id}
//             className="bg-white border rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
//           >
//             <Link to={`/product/${p.id}`}>
//               <img
//                 src={p.image}
//                 alt={p.name}
//                 className="w-full h-56 object-contain bg-white p-2 rounded-md mb-3 transition-transform hover:scale=105"
//               />
//               <h3 className="font-semibold text-lg text-gray-800 mb-1">
//                 {p.name}
//               </h3>
//               <p className="text-gray-600 mb-1">{p.category}</p>
//               <p className="text-gray-900 font-bold mb-3">${p.price}</p>
//             </Link>
//             <button
//               onClick={() => addToCart(p)}
//               className="mt-auto bg-black hover:bg-black-600 text-white py-2 rounded-lg font-semibold transition"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//         {filtered.length === 0 && (
//           <p className="col-span-full text-center text-gray-500 mt-6">
//             No products found
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }






// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// export default function ProductsPage() {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("");
//   const [sortOption, setSortOption] = useState("");
//   const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
//   const [toast, setToast] = useState({ show: false, message: "" });

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/products")
//       .then((res) => setProducts(res.data))
//       .catch((err) => console.error("Error fetching products:", err));
//   }, []);

//   const addToCart = (product) => {
//     const newCart = [...cart, product];
//     setCart(newCart);
//     localStorage.setItem("cart", JSON.stringify(newCart));

//     setToast({ show: true, message: `${product.name} added to cart!` });
//     setTimeout(() => setToast({ show: false, message: "" }), 2500);
//   };

//   const filtered = products
//     .filter(
//       (p) =>
//         p.name?.toLowerCase().includes(search.toLowerCase()) &&
//         (category ? p.category.toLowerCase() === category.toLowerCase() : true) &&
//         p.status === true
//     )
//     .sort((a, b) => {
//       if (sortOption === "price-asc") return a.price - b.price;
//       if (sortOption === "price-desc") return b.price - a.price;
//       if (sortOption === "newest") {
//         const dateA = new Date(a.date || 0);
//         const dateB = new Date(b.date || 0);
//         return dateB - dateA;
//       }
//       return 0;
//     });

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50 relative">
  
//       {toast.show && (
//         <div className="fixed top-20 right-6 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-slide-in">
//           {toast.message}
//         </div>
//       )}

      
//       <div className="flex flex-col md:flex-row gap-4 mb-6 items-center p-6">
//         <input
//           placeholder="Search products..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="flex-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
//         />
//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
//         >
//           <option value="">All Categories</option>
//           <option value="shoes">Shoes</option>
//           <option value="boots">Boots</option>
//           <option value="sneakers">Sneakers</option>
//         </select>

//         <select
//           value={sortOption}
//           onChange={(e) => setSortOption(e.target.value)}
//           className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
//         >
//           <option value="">Sort By</option>
//           <option value="price-asc">Price: Low to High</option>
//           <option value="price-desc">Price: High to Low</option>
//           <option value="newest">Newest Arrivals</option>
//         </select>
//       </div>

     
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 pb-12">
//         {filtered.map((p) => (
//           <div
//             key={p.id}
//             className="bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
//           >
//             <Link to={`/product/${p.id}`} className="flex flex-col flex-1">
//               <div className="relative w-full h-72 bg-white rounded-2xl overflow-hidden border border-gray-100 flex items-center justify-center group">
//                 <img
//                   src={p.image}
//                   alt={p.name}
//                   className="max-h-64 object-contain transition-transform duration-300 group-hover:scale-105"
//                 />
//               </div>

//               <div className="p-3 text-center">
//                 <h3 className="font-semibold text-lg text-gray-800 mb-1">{p.name}</h3>
//                 <p className="text-gray-600 mb-1">{p.category}</p>
//                 <p className="text-yellow-600 font-bold mb-3">${p.price}</p>
//               </div>
//             </Link>

//             <button
//               onClick={() => addToCart(p)}
//               className="mt-auto bg-black hover:bg-gray-800 text-white py-2 rounded-lg font-semibold transition mx-3 mb-4"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}

//         {filtered.length === 0 && (
//           <p className="col-span-full text-center text-gray-500 mt-6">No products found</p>
//         )}
//       </div>
//     </div>
//   );
// }







// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// export default function ProductsPage() {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("");
//   const [sortOption, setSortOption] = useState("");
//   const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
//   const [toast, setToast] = useState({ show: false, message: "" });

  
//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/products")
//       .then((res) => setProducts(res.data))
//       .catch((err) => console.error("Error fetching products:", err));
//   }, []);


//   const addToCart = (product) => {
//     const newCart = [...cart, product];
//     setCart(newCart);
//     localStorage.setItem("cart", JSON.stringify(newCart));

//     setToast({ show: true, message: `${product.name} added to cart!` });
//     setTimeout(() => setToast({ show: false, message: "" }), 2500);
//   };

  
//   const filtered = [...products]
//     .filter(
//       (p) =>
//         p.name?.toLowerCase().includes(search.toLowerCase()) &&
//         (category ? p.category.toLowerCase() === category.toLowerCase() : true) &&
//         p.status === true
//     )
//     .sort((a, b) => {
      
//       const priceA = parseFloat(String(a.price).replace(/[^0-9.]/g, "")) || 0;
//       const priceB = parseFloat(String(b.price).replace(/[^0-9.]/g, "")) || 0;

//       if (sortOption === "price-asc") return priceA - priceB;
//       if (sortOption === "price-desc") return priceB - priceA;

//       if (sortOption === "newest") {
//         const dateA = new Date(a.date || 0);
//         const dateB = new Date(b.date || 0);
//         return dateB - dateA;
//       }
//       return 0;
//     });

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50 relative">
      
//       {toast.show && (
//         <div className="fixed top-20 right-6 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-slide-in">
//           {toast.message}
//         </div>
//       )}


//       <div className="flex flex-col md:flex-row gap-4 mb-6 items-center p-6">
//         <input
//           placeholder="Search products..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="flex-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
//         />

//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
//         >
//           <option value="">All Categories</option>
//           <option value="shoes">Shoes</option>
//           <option value="boots">Boots</option>
//           <option value="sneakers">Sneakers</option>
//         </select>

//         <select
//           value={sortOption}
//           onChange={(e) => setSortOption(e.target.value)}
//           className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
//         >
//           <option value="">Sort By</option>
//           <option value="price-asc">Price: Low to High</option>
//           <option value="price-desc">Price: High to Low</option>
//           <option value="newest">Newest Arrivals</option>
//         </select>
//       </div>

      
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 pb-12">
//         {filtered.map((p) => (
//           <div
//             key={p.id}
//             className="bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
//           >
//             <Link to={`/product/${p.id}`} className="flex flex-col flex-1">
//               <div className="relative w-full h-72 bg-white rounded-2xl overflow-hidden border border-gray-100 flex items-center justify-center group">
//                 <img
//                   src={p.image}
//                   alt={p.name}
//                   className="max-h-64 object-contain transition-transform duration-300 group-hover:scale-105"
//                 />
//               </div>

//               <div className="p-3 text-center">
//                 <h3 className="font-semibold text-lg text-gray-800 mb-1">{p.name}</h3>
//                 <p className="text-gray-600 mb-1">{p.category}</p>
//                 <p className="text-yellow-600 font-bold mb-3">${p.price}</p>
//               </div>
//             </Link>

//             <button
//               onClick={() => addToCart(p)}
//               className="mt-auto bg-black hover:bg-gray-800 text-white py-2 rounded-lg font-semibold transition mx-3 mb-4"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}

//         {filtered.length === 0 && (
//           <p className="col-span-full text-center text-gray-500 mt-6">
//             No products found
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }








import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const addToCart = (product) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || !user.email) {
    Swal.fire({
      title: "Login Required",
      text: "Please login to add items to your cart.",
      icon: "info",
      confirmButtonColor: "#000",
    });
    return;
  }

  const allCarts = JSON.parse(localStorage.getItem("cart")) || {};
  const userCart = allCarts[user.email] || [];

  
  const existing = userCart.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    userCart.push({ ...product, quantity: 1 });
  }

  allCarts[user.email] = userCart;
  localStorage.setItem("cart", JSON.stringify(allCarts));
  setCart(userCart);

  Swal.fire({
    title: "Added to Bag!",
    text: `${product.name} has been added to your cart.`,
    icon: "success",
    confirmButtonColor: "#000",
    timer: 2000,
    showConfirmButton: false,
    toast: true,
    position: "top-end",
  });
};


  const filtered = [...products]
    .filter(
      (p) =>
        p.name?.toLowerCase().includes(search.toLowerCase()) &&
        (category ? p.category.toLowerCase() === category.toLowerCase() : true) &&
        p.status === true
    )
    .sort((a, b) => {
      const priceA = parseFloat(String(a.price).replace(/[^0-9.]/g, "")) || 0;
      const priceB = parseFloat(String(b.price).replace(/[^0-9.]/g, "")) || 0;

      if (sortOption === "price-asc") return priceA - priceB;
      if (sortOption === "price-desc") return priceB - priceA;
      if (sortOption === "newest") {
        const dateA = new Date(a.date || 0);
        const dateB = new Date(b.date || 0);
        return dateB - dateA;
      }
      return 0;
    });

  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa] font-urbanist">
      
    
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-12 items-center p-6 bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-gray-800 w-full md:w-1/3"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-gray-800"
        >
          <option value="">All Categories</option>
          <option value="shoes">Shoes</option>
          <option value="boots">Boots</option>
          <option value="sneakers">Sneakers</option>
        </select>

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-gray-800"
        >
          <option value="">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="newest">Newest</option>
        </select>
      </div>

  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-16 px-10 pb-20">
        {filtered.map((p) => (
          <div key={p.id} className="group flex flex-col items-center text-center transition-all duration-500">
            <Link to={`/product/${p.id}`} className="block w-full relative overflow-hidden">
              <div className="bg-gray-100 h-[400px] p-4 flex items-center justify-center overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 rounded-xl">
                <img
                  src={p.image}
                  alt={p.name}
                  className="max-h-[300px] object-contain transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-2"
                />
              </div>
            </Link>

            <div className="mt-6 space-y-1">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-all duration-300 tracking-tight">
                {p.name}
              </h3>
              <p className="text-sm text-gray-500">{p.category}</p>
              <p className="text-xl font-semibold text-gray-900 tracking-tight">₹{p.price}</p>
            </div>

            <button
              onClick={() => addToCart(p)}
              className="mt-5 bg-black text-white px-6 py-2 rounded-full font-semibold tracking-tight hover:bg-gray-900 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Add to Bag
            </button>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="col-span-full text-center text-gray-500 mt-10 text-lg">
            No products found
          </p>
        )}
      </div>
    </div>
  );
}
