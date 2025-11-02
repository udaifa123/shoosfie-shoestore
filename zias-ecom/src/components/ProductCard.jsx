// import React from "react";

// export default function ProductCard({ product, user }) {
//   const handleAdd = () => {
//     if (!user) return alert("Please login first!");
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     cart.push(product);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     alert(`${product.name} added to cart`);
//   };

//   return (
//     <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-200">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-4">
//         <h3 className="font-bold text-lg">{product.name}</h3>
//         <p className="text-gray-600 mt-1">${product.price}</p>
//         <button
//           onClick={handleAdd}
//           className="mt-3 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-200"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }




import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function ProductCard({ product, user }) {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  const toggleFavorite = (e) => {
    e.preventDefault(); 
    const exists = favorites.find((item) => item.id === product.id);
    const updated = exists
      ? favorites.filter((item) => item.id !== product.id)
      : [...favorites, product];

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!user) {
      alert("Please login first!");
      navigate("/login");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      exists.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart`);
  };

  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="relative border rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col bg-white overflow-hidden">
        
        
        <button
          onClick={toggleFavorite}
          className="absolute top-3 right-3 text-xl z-10"
        >
          {favorites.some((item) => item.id === product.id) ? (
            <FaHeart className="text-red-500 hover:scale-110 transition-transform" />
          ) : (
            <FaRegHeart className="text-gray-400 hover:scale-110 transition-transform" />
          )}
        </button>

        
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t"
        />

  
        <div className="p-4 flex flex-col flex-grow justify-between font-urbanist">
          <div>
            <h3 className="font-semibold text-lg tracking-tight text-gray-900">{product.name}</h3>
            <p className="text-gray-700 mt-1 font-medium">₹{product.price}</p>
            <p className="text-sm text-gray-500">{product.category}</p>
          </div>

        
          <button
            onClick={handleAdd}
            className="mt-4 bg-black text-white py-2 rounded hover:bg-gray-800 transition font-semibold tracking-tight"
          >
            Add to Bag
          </button>
        </div>
      </div>
    </Link>
  );
}
