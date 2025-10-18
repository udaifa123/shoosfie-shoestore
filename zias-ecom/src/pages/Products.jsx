// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ProductCard from "../components/ProductCard";

// export default function Products() {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");
//   const [sortOrder, setSortOrder] = useState("asc");
//   const [user, setUser] = useState(null); 

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     setUser(storedUser);

//     axios
//       .get("http://localhost:5000/products")
//       .then(res =>{
//         console.log("Fetched products:",res.data)
//          setProducts(res.data)
//       })
//       .catch(err=>console.error("Error fetching products:",err));

//   }, []);

//   const filteredProducts = [...products]
//     .filter(p => category === "All" || p.category === category)
//     .filter(p => p.name?.toLowerCase().includes(search.toLowerCase()))
//     .sort((a, b) => (sortOrder === "asc" ? a.price - b.price : b.price - a.price));

//   const categories = ["All", ...new Set(products.map(p => p.category))];

//   return (
//     <div className="p-6">
      
//       <div className="flex gap-4 mb-4 flex-wrap">
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={search}
//           onChange={e => setSearch(e.target.value)}
//           className="border p-2 rounded flex-1"
//         />
//         <select
//           value={category}
//           onChange={e => setCategory(e.target.value)}
//           className="border p-2 rounded"
//         >
//           {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
//         </select>
//         <select
//           value={sortOrder}
//           onChange={e => setSortOrder(e.target.value)}
//           className="border p-2 rounded"
//         >
//           <option value="asc">Price: Low to High</option>
//           <option value="desc">Price: High to Low</option>
//         </select>
//       </div>

      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {filteredProducts.length === 0 && <p>No products found</p>}
//         {filteredProducts.map(product => (
//           <ProductCard key={product.id} product={product} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    axios
      .get("http://localhost:5001/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  const categories = ["All", ...new Set(products.map(p => p.category))];

  const filteredProducts = [...products]
    .filter(p => p.status === "active") 
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter(p => category === "All" || p.category === category)
    .sort((a, b) => (sortOrder === "asc" ? a.price - b.price : b.price - a.price));

  return (
    <div className="p-6">
      
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border p-2 rounded flex-1 min-w-[200px]"
        />
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="border p-2 rounded"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <select
          value={sortOrder}
          onChange={e => setSortOrder(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length === 0 ? (
          <p className="text-gray-500 col-span-full text-center">
            No products found
          </p>
        ) : (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}
