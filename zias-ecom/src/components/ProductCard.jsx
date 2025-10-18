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


import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-200">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded mb-2"
      />
      <h3 className="font-bold text-lg">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
      <p className="text-sm text-gray-500">{product.category}</p>
    </div>
  );
}
