// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Home() {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("");
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
//     alert(`${product.name} added to cart`);
//   };

//   const filtered = products.filter(
//     (p) =>
//       p.name?.toLowerCase().includes(search.toLowerCase()) &&
//       (category ? p.category === category : true) &&
//       p.status === "active"
//   );

//   return (
//     <div className="p-4">
//       <div className="flex gap-2 mb-4">
//         <input
//           placeholder="Search..."
//           className="border p-2 rounded"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <select
//           className="border p-2 rounded"
//           onChange={(e) => setCategory(e.target.value)}
//         >
//           <option value="">All</option>
//           <option value="Running">Running</option>
//           <option value="Casual">Casual</option>
//         </select>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {filtered.map((p) => (
//           <div key={p.id} className="border p-4 rounded">
//             <img
//               src={p.image}
//               alt={p.name}
//               className="w-full h-40 object-cover mb-2"
//             />
//             <h3 className="font-bold">{p.name}</h3>
//             <p>${p.price}</p>
//             <button
//               onClick={() => addToCart(p)}
//               className="bg-green-500 text-white p-2 rounded mt-2"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    axios
      .get("http://localhost:5001/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const addToCart = (product) => {
    const newCart = [...cart,product];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    alert(`${product.name} added to cart`);
  };

  const filtered = products.filter(
    (p) =>
      p.name?.toLowerCase().includes(search.toLowerCase()) &&
      (category ? p.category.toLowerCase()=== category.toLocaleLowerCase() : true) &&
      p.status === true
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
        <input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
        >
          <option value="">All Categories</option>
          <option value="shoes">Shoes</option>
          <option value="boots">Boots</option>
          <option value="Sneakers">Sneaker</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-6">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="bg-white border rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-48 object-cover rounded-md mb-3"
            />
            <h3 className="font-semibold text-lg text-gray-800 mb-1">{p.name}</h3>
            <p className="text-gray-600 mb-1">{p.category}</p>
            <p className="text-gray-900 font-bold mb-3">${p.price}</p>
            <button
              onClick={() => addToCart(p)}
              className="mt-auto bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full text-center text-gray-500 mt-6">
            No products found
          </p>
        )}
      </div>
    </div>
  );
}
