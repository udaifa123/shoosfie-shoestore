import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleAddToCart = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Please login first!");
      navigate("/login");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      if (existingItem.quantity < product.stock) {
        existingItem.quantity += 1;
      } else {
        alert("Stock limit reached!");
      }
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
  };

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row gap-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full md:w-1/2 h-80 object-cover rounded"
      />
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-2">{product.category}</p>
        <p className="text-xl font-semibold mb-2">${product.price}</p>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="mb-4">
          Stock:{" "}
          <span className={product.stock > 0 ? "text-green-600" : "text-red-600"}>
            {product.stock}
          </span>
        </p>
        <button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className={`px-4 py-2 rounded text-white font-semibold ${
            product.stock === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
