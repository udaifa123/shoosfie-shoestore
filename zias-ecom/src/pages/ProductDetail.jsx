import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setSelectedImage(res.data.image);
        const favs = JSON.parse(localStorage.getItem("favorites")) || [];
        setIsFav(favs.some((item) => item.id === res.data.id));
      })
      .catch((err) => console.error(err));
  }, [id]);

  
  useEffect(() => {
    if (product) {
      axios
        .get(`http://localhost:5000/products?category=${product.category}`)
        .then((res) => setRelated(res.data.filter((p) => p.id !== product.id)))
        .catch((err) => console.error(err));
    }
  }, [product]);

  
  const toggleFavorite = () => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    const exists = favs.find((item) => item.id === product.id);
    const updated = exists
      ? favs.filter((item) => item.id !== product.id)
      : [...favs, product];

    localStorage.setItem("favorites", JSON.stringify(updated));
    setIsFav(!isFav);

    Swal.fire({
      icon: exists ? "info" : "success",
      title: exists ? "Removed from Wishlist" : "Added to Wishlist",
      text: `${product.name} ${exists ? "removed" : "added"} from your favorites.`,
      timer: 1200,
      showConfirmButton: false,
    });
  };


  const handleAddToCart = () => {
  if (!selectedSize) {
    Swal.fire({
      icon: "warning",
      title: "Select Size",
      text: "Please choose a size before adding to cart!",
    });
    return;
  }

  const user = JSON.parse(localStorage.getItem("user"));
  if (!user || !user.email) {
    Swal.fire({
      icon: "info",
      title: "Login Required",
      text: "Please log in to continue shopping.",
    }).then(() => navigate("/login"));
    return;
  }

  const allCarts = JSON.parse(localStorage.getItem("cart")) || {};
  const userKey = user.email;
  const userCart = allCarts[userKey] || [];

  
  const existing = userCart.find(
    (i) => i.id === product.id && i.size === selectedSize
  );

  if (existing) existing.quantity += 1;
  else userCart.push({ ...product, size: selectedSize, quantity: 1 });

  allCarts[userKey] = userCart;
  localStorage.setItem("cart", JSON.stringify(allCarts));

  Swal.fire({
    icon: "success",
    title: "Added to Cart",
    text: `${product.name} (Size: ${selectedSize}) added to your cart!`,
    timer: 1200,
    showConfirmButton: false,
  });
};

  if (!product)
    return <p className="text-center mt-10 font-urbanist">Loading...</p>;

  const sizes = ["5.5", "6", "7", "8", "9", "10", "11"];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 font-urbanist">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <div className="flex flex-col items-center relative group">
          <button
            onClick={toggleFavorite}
            className="absolute top-4 right-4 text-2xl z-10"
          >
            {isFav ? (
              <FaHeart className="text-red-500 hover:scale-110 transition-transform" />
            ) : (
              <FaRegHeart className="text-gray-400 hover:scale-110 transition-transform" />
            )}
          </button>

          <div className="flex gap-3 mb-4 justify-center">
            {product.variants?.map((variant, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(variant.image)}
                className={`border rounded-lg p-1 hover:border-black transition ${
                  selectedImage === variant.image
                    ? "border-black"
                    : "border-gray-300"
                }`}
              >
                <img
                  src={variant.image}
                  alt={variant.color}
                  className="w-12 h-12 object-cover rounded"
                />
              </button>
            ))}
          </div>

          <div className="w-full max-w-md aspect-square bg-gray-100 rounded-lg overflow-hidden group relative">
            <img
              src={selectedImage}
              alt={product.name}
              className="object-contain w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </div>
        </div>

        
        <div>
          <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
          <div className="flex items-center gap-2 mb-3">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < (product.rating || 4)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
            <span className="text-sm text-gray-500">
              ({product.reviews?.length || 12} reviews)
            </span>
          </div>

          <p className="text-gray-700 mb-2">{product.category}</p>
          <p className="text-xl font-semibold mb-2">₹{product.price}</p>
          <p className="text-gray-500 text-sm mb-4">
            Incl. of taxes (also includes all applicable duties)
          </p>
          <p className="text-gray-700 mb-6">{product.description}</p>

        
          <div className="mb-5">
            <p className="font-semibold mb-2">Select Size:</p>
            <div className="flex gap-2 flex-wrap">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg font-semibold transition-colors ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-gray-300 hover:border-black"
                  }`}
                >
                  UK {size}
                </button>
              ))}
            </div>
          </div>

      
          <button
            onClick={handleAddToCart}
            className="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>


      {related.length > 0 && (
        <div className="max-w-6xl mx-auto mt-16">
          <h3 className="text-2xl font-semibold mb-6">You Might Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/product/${item.id}`)}
                className="border rounded-lg p-3 shadow hover:shadow-lg cursor-pointer transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-contain mb-2"
                />
                <h4 className="font-medium truncate">{item.name}</h4>
                <p className="text-gray-600 text-sm">₹{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
