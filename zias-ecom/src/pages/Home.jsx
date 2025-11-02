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
 //}


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

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
//     const newCart = [...cart,product];
//     setCart(newCart);
//     localStorage.setItem("cart", JSON.stringify(newCart));
//     alert(`${product.name} added to cart`);
//   };

//   const filtered = products.filter(
//     (p) =>
//       p.name?.toLowerCase().includes(search.toLowerCase()) &&
//       (category ? p.category.toLowerCase()=== category.toLocaleLowerCase() : true) &&
//       p.status === true
//   );

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
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
//           <option value="Sneakers">Sneakers</option>
//         </select>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-6">
//         {filtered.map((p) => (
//           <div
//             key={p.id}
//             className="bg-white border rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
//           >
//             <Link to={`/product/${p.id}`}>
//             <img
//               src={p.image}
//               alt={p.name}
//               className="w-full h-48 object-cover rounded-md mb-3"
//             />
//             <h3 className="font-semibold text-lg text-gray-800 mb-1">{p.name}</h3>
//             <p className="text-gray-600 mb-1">{p.category}</p>
//             <p className="text-gray-900 font-bold mb-3">${p.price}</p>
//             </Link>
//             <button
//               onClick={() => addToCart(p)}
//               className="mt-auto bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition"
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

// export default function Home() {
//   const [products, setProducts] = useState([]);
//   const [showProducts, setShowProducts] = useState(false); 
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
//       (category
//         ? p.category.toLowerCase() === category.toLowerCase()
//         : true) &&
//       p.status === true
//   );

//   if (!showProducts) {
//     return (
//       <div className="relative w-full h-screen overflow-hidden">
// <img
//     src="https://png.pngtree.com/background/20230519/original/pngtree-the-air-jordans-are-on-a-table-in-a-row-picture-image_2656958.jpg"
//   alt="Shoes Banner"
//   className="absolute inset-0 w-full h-full object-cover"
// />

//         <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
//           <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
//             Step into Style 
//           </h1>
//           <p className="text-gray-200 mb-6 text-lg drop-shadow-md">
//             Discover the latest collections at Shoosfie
//           </p>
//           <button
//             onClick={() => setShowProducts(true)}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
//           >
//             Shop Now
//           </button>
//         </div>
//       </div>
//     );
//   }

  
//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
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
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
//         {filtered.map((p) => (
//           <div
//             key={p.id}
//             className="bg-white border rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
//           >
//             <Link to={`/product/${p.id}`}>
//               <img
//                 src={p.image}
//                 alt={p.name}
//                 className="w-full h-48 object-cover rounded-md mb-3"
//               />
//               <h3 className="font-semibold text-lg text-gray-800 mb-1">
//                 {p.name}
//               </h3>
//               <p className="text-gray-600 mb-1">{p.category}</p>
//               <p className="text-gray-900 font-bold mb-3">${p.price}</p>
//             </Link>
//             <button
//               onClick={() => addToCart(p)}
//               className="mt-auto bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition"
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



// import React from "react";
// import { useNavigate } from "react-router-dom";


// export default function HomePage() {
//   const navigate = useNavigate();

//   return (

// <div className="relative h-screen bg-cover bg-center w-screen overflow-hidden">
      
//       <img
//         src="https://png.pngtree.com/background/20230519/original/pngtree-the-air-jordans-are-on-a-table-in-a-row-picture-image_2656958.jpg"
//         alt="Shoes Banner"
//         className="absolute inset-0 opacity-50 w-screen h-screen"
//       />

      
//       <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-xl mx-auto ">
//         <h1 className="text-5xl font-bold mb-4 text-white">
//           Step into Style
//         </h1>
//         <p className="text-white text-xl mb-8">
//           Discover the latest collections at Shoosfie
//         </p>
//         <button
//           onClick={() => navigate("/products")}
//           className="bg-white text-white px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300"
//         >
//           Shop Now
//         </button>
//       </div>


//     </div>
//   );
// }






// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function HomePage() {
//   const navigate = useNavigate();

//   return (
//     <div className="w-screen flow-hidden bg-gray-50 ">
      
//      <div className="relative h-160 overflow-hidden"> 
//         <img
//           src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/global_the_original_originals_ss25_launch_plp_samba_statement_banner_d_61d7ec12e7.jpg"
//           alt="Shoes Banner"
//           className="w-full h-full object-contain"
//         /> 
        
//  <video 
//   autoPlay
//   loop
//    muted
//   className="absolute inset-0 w-full h-full object-cover"
//  src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/af1d68187192071.6673f1013ae52.gif" 
// ></video> 

        
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
//           <h1 className="text-5xl font-bold font-serif mb-4 text-white ">
//             Step into Style
//           </h1>
//           <p className="text-white text-xl mb-8 font-italic">
//             Discover the latest collections at Shoosfie
//           </p>
//           <button
//             onClick={() => navigate("/products")}
//             className="bg-white text-black px-6 py-3 rounded-full hover:bg-white-200 transition duration-300"
//           >
//             Shop Now
//           </button>
//         </div>
//       </div>

//       {/* <div className="text-center py-8">
//         {user ? (
//           <p className="text-lg font-semibold">Hello,{user.role}!</p>
//         ) : (
//           <p className="text-lg font-semibold">
//             Please <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
//           </p>
//         )}
//       </div> */}
       
      
//       <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
        
//         <div
//           className="cursor-pointer rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition"
//           onClick={() => navigate("/collections/men")}
//         >
//           <img
//             src="https://static.zara.net/assets/public/6a53/a7dd/57954a98b67f/2045622b9e70/12611420800-000-a1/12611420800-000-a1.jpg?ts=1747991230554&w=552" 
//             alt="Men"
//             className="w-full h-140 object-cover"
//           />
//           <h2 className="text-xl font-semibold text-center py-4">Men</h2>
//         </div>

    
//         <div
//           className="cursor-pointer rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition"
//           onClick={() => navigate("/collections/women")}
//         >
//           <img
//             src="https://static.zara.net/assets/public/7d77/06f4/1fcf4c8796f9/79b965d6ba29/12157610105-p/12157610105-p.jpg?ts=1757662726046&w=830" 
//             alt="Women"
//             className="w-full h-140 object-cover"
//           />
//           <h2 className="text-xl font-semibold text-center py-4">Women</h2>
//         </div>

        

      
//         <div
//           className="cursor-pointer rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition"
//           onClick={() => navigate("/collections/kids")}
//         >
//           <img
//             src="https://static.zara.net/assets/public/a66d/f539/46b440c38bdc/a0b95d8df8c7/05431773812-p/05431773812-p.jpg?ts=1760688794634&w=830" 
//             alt="Kids"
//             className="w-full h-140 object-cover"
//           />
//           <h2 className="text-xl font-semibold text-center py-4">Kids</h2>
//         </div>
//       </div>
      

//       {/* <div>
//         <img src="https://in.puma.com/in/en/collections/collections-ripndip" alt="" />
//       </div>
//        */}
//       {/* <div className="relative h-screen w-screen overflow-hidden flex justify-center items-center">
//         <img src="https://andscape.com/wp-content/uploads/2022/12/as_year-best-sneakers.png" alt=""
//         className="w-[90%] h-[90%] object-cover rounded-[20px]"
//          />
//       </div> */}
//       {/* <div>
//         <img src="https://www.nike.com/w/jayson-tatum-4t66i" alt="" />
//       </div> */}

//       <div className="flex justify-center items-center gap-8 px-100 py-12">
//         <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/392725/02/sv01/fnd/IND/fmt/png/Blktop-Rider-Suede-Sneakers" alt="" 
//         className="w-1/2 rounded shadow-lg "
//         />
//         <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/402603/01/sv01/fnd/IND/fmt/png/Club-Kayzer-Superior-Cushioning-Casual-Shoes" alt="" 
//         className="w-1/2 rounded shadow-lg"
//         />
//         <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/312076/06/sv01/fnd/IND/fmt/png/Conduct-Pro-Lightweight-Running-Shoes" alt="" 
//         className="w-1/2 rounded shadow-lg"
//         />
//         <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/402692/01/sv01/fnd/IND/fmt/png/Palermo-Sneakers" alt=""
//         className="w-1/2 rounded shadow-lg"
//         />
//       </div>

//       {/* <div className="flex justify-center items-center gap-8 px-30 py-12">
        
//       </div> */}

//       <div className="flex justify-center items-center gap-8 px-20 py-6">
//         <img src="https://static.zara.net/assets/public/6523/59cd/3fce4561b294/9f4f5c2d6b37/15017510035-000-p/15017510035-000-p.jpg?ts=1750067556613&w=1024" alt=""
//         className="w-90 rounded shadow-lg"
//         />
//         <img src="https://static.zara.net/assets/public/700c/94ac/59dc495593fb/d554629a73f3/15017510035-000-a1/15017510035-000-a1.jpg?ts=1750067556934&w=1125" alt="" 
//         className="w-90 rounded shadow-lg"
//         />
//       </div>

//       {/* <div className="flex justify-center items-center gap-8 px-30 py-12">
        
//       </div> */}

//       <div className="flex justify-center items-center gap-8 px-100 py-12">
//         <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/404264/01/sv01/fnd/IND/fmt/png/Speedcat-Pearlized-Women's-Ballet-Shoes" alt=""
      
//         className="w-1/2 rounded shadow-lg"
//         />
//          <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/406758/01/sv01/fnd/IND/fmt/png/Speedcat-Suede-Cafe-Women's-Ballet-Shoes" alt=""
//         className="w-1/2 rounded shadow-lg"
//         />
        
//         <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/401287/06/sv01/fnd/IND/fmt/png/Speedcat-Suede-Ballet-Women's-Shoes" alt="" 
//         className="w-1/2 rounded shadow-lg"
//         />

//         <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/404395/01/sv01/fnd/IND/fmt/png/PUMA-x-ROS%C3%89-Speedcat-Ballet-Women's-Shoes" alt=""
//         className="w-1/2 rounded shadow-lg"
//         />

//       </div>
// {/* 
//       <div className="flex justify-center items-center gap-8 px-100 py-12">
       
//       </div> */}
//     </div>
//   );
// }









import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const categories = [
    {
      label: "Men",
      image: "https://static.zara.net/assets/public/6a53/a7dd/57954a98b67f/2045622b9e70/12611420800-000-a1/12611420800-000-a1.jpg?ts=1747991230554&w=552",
      link: "/collections/men",
    },
    {
      label: "Women",
      image: "https://static.zara.net/assets/public/7d77/06f4/1fcf4c8796f9/79b965d6ba29/12157610105-p/12157610105-p.jpg?ts=1757662726046&w=830",
      link: "/collections/women",
    },
    {
      label: "Kids",
      image: "https://static.zara.net/assets/public/a66d/f539/46b440c38bdc/a0b95d8df8c7/05431773812-p/05431773812-p.jpg?ts=1760688794634&w=830",
      link: "/collections/kids",
    },
  ];

  const featuredShoes = [
    {
      src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/392725/02/sv01/fnd/IND/fmt/png/Blktop-Rider-Suede-Sneakers",
      name: "Blktop Rider Suede Sneakers",
    },
    {
      src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/402603/01/sv01/fnd/IND/fmt/png/Club Kayzer Cushioning Shoes",
      name: "Club Kayzer Cushioning Shoes",
    },
    {
      src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/312076/06/sv01/fnd/IND/fmt/png/Conduct-Pro Running Shoes",
      name: "Conduct Pro Running Shoes",
    },
    {
      src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/402692/01/sv01/fnd/IND/fmt/png/Palermo Sneakers",
      name: "Palermo Sneakers",
    },
    {
      src: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/8507bfd1-93ca-43dd-9e34-dd6c30afc7f1/nike-shox-ride-2.jpg",
      name: "Nike Shox Ride 2",
    },
    {
      src: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/xa3j5pmlqu9lz6y1xbsb/NIKE+SHOX+TL.png",
      name: "Nike Shox TL",
    },
    {
      src: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/9e608f62-74f6-4d2f-a614-c2fc1c529234/NIKE+AIR+MAX+PLUS.png",
      name: "Nike Air Max Plus®",
    },
  ];



  const balletShoes = [
    {
      src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/404264/01/sv01/fnd/IND/fmt/png/Speedcat-Pearlized-Women's-Ballet-Shoes",
      name: "Speedcat Pearlized Ballet Shoes",
    },
    {
      src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/406758/01/sv01/fnd/IND/fmt/png/Speedcat-Suede-Cafe-Women's-Ballet-Shoes",
      name: "Speedcat Suede Café Ballet Shoes",
    },
    {
      src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/401287/06/sv01/fnd/IND/fmt/png/Speedcat-Suede-Ballet-Women's-Shoes",
      name: "Speedcat Suede Ballet Shoes",
    },
    {
      src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/404395/01/sv01/fnd/IND/fmt/png/PUMA-x-ROS%C3%89-Speedcat-Ballet-Women's-Shoes",
      name: "PUMA x ROSÉ Ballet Shoes",
    },
  ];


  return (
    <div className="w-screen overflow-hidden bg-gray-50 font-urbanist">
      
      <div className="relative h-screen w-full overflow-hidden">
        <img
          src="https://www.superkicks.in/cdn/shop/files/jordan-desktop.gif?v=1758706564"
          alt="Shoes Banner"
          className="absolute inset-0 w-screen h-full object-cover brightness-60"
        />
        

        {/* <video 
  autoPlay
  loop
   muted
  className="absolute inset-0 w-full h-full object-cover"
  src="https://www.peltzshoes.com/cdn/shop/videos/c/vp/70334af3a86b409c886524945719c1cb/70334af3a86b409c886524945719c1cb.HD-720p-4.5Mbps-54545918.mp4?v=0" 
 ></video>  */}


        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 drop-shadow-lg">Step Into Style</h1>
<p className="text-lg sm:text-xl italic text-gray-200 mb-35">
    Discover the latest collections at <span className="font-semibold text-white">Shoosfie</span>
  </p>
            <button
            onClick={() => navigate("/products")}
            className="bg-white text-black px-6 py-3 hover:bg-gray-200 transition mb-20"
          >
            Shop Now
          </button>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto py-16 grid grid-cols-1 sm:grid-cols-3 gap-8 px-4">
        {categories.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden shadow-lg cursor-pointer"
            onClick={() => navigate(item.link)}
          >
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-blur bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <h2 className="text-2xl font-bold text-white">{item.label}</h2>
            </div>
          </div>
        ))}
      </div>

      <div>
        {/* <img src="https://www.superkicks.in/cdn/shop/files/tokyo_desk.gif?v=1761656023" alt=""
        className="w-full "
        /> */}

         <video 
  autoPlay
  loop
   muted
   className="w-full"
  src="https://www.peltzshoes.com/cdn/shop/videos/c/vp/70334af3a86b409c886524945719c1cb/70334af3a86b409c886524945719c1cb.HD-720p-4.5Mbps-54545918.mp4?v=0" 
 ></video> 

        
      </div>

      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Featured Shoes</h2>
        <div className="overflow-x-auto scroll-smooth px-2 pb-4">
          <div className="flex gap-6 w-max">
            {featuredShoes.map((shoe, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[calc(100vw/3-2rem)] max-w-sm bg-white p-4 rounded-xl shadow-md"
              >
                <img
                  src={shoe.src}
                  alt={shoe.name}
                  className="w-full h-64 object-contain rounded-lg hover:scale-105 transition"
                />
                <p className="mt-4 text-center text-lg font-medium">{shoe.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6">
        <img src="https://www.superkicks.in/cdn/shop/files/collab-room-Desk-_1.gif?v=1756813063" alt=""
        className="w-ful h-[550px] object-cover rounded-none"
        />
                 
         <img src="https://www.rotterdamsballonnenbedrijf.nl/blog/images/schoenenwinkels-rotterdam-centrum.jpg" alt="" 
        className="w-full w-1/2 h-[550px]"
       /> 

        
    

       
      </div>
{/* 
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6">
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/398846/01/mod04/fnd/IND/fmt/png/Speedcat-OG-Sneakers" alt=""
        className="w-150 h-150"
        />
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/398846/01/fnd/IND/fmt/png/Speedcat-OG-Sneakers" alt=""
        className="w-150 h-150"
        />
      </div> */}
      <div>
         <img src="https://neemans.com/cdn/shop/files/Desktop_-_Product_in_Focus.jpg?v=1759919229&width=1920" alt=""

         /> 
      </div>
       
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 px-8 py-8">
  <video
    autoPlay
    loop
    muted
    className="w-full h-140 object-cover shadow"
    src="https://www.libertyshoesonline.com/cdn/shop/files/quinn_ucoyx3xwlruy59q8rzlck4co.mp4#t=0.1"
  ></video>

  <video
    autoPlay
    loop
    muted
    className="w-full h-140 object-cover  shadow"
    src="https://www.libertyshoesonline.com/cdn/shop/files/quinn_xv890i8eq4qh1da3mqqxo63s.mp4#t=0.1"
  ></video>

  <video
    autoPlay
    loop
    muted
    className="w-full h-140 object-cover shadow"
    src="https://www.libertyshoesonline.com/cdn/shop/files/quinn_ycfi8g82tzgh7yg3eafalw59.mp4#t=0.1"
  ></video>

  <video
    autoPlay
    loop
    muted
    className="w-full h-140 object-cover shadow"
    src="https://www.libertyshoesonline.com/cdn/shop/files/quinn_nmt37oi0y17amgoyiql7lcoj.mp4#t=0.1"
  ></video>

  <video
    autoPlay
    loop
    muted
    className="w-full h-140 object-cover shadow"
    src="https://www.libertyshoesonline.com/cdn/shop/files/quinn_ule9g54xcx5vx203i328p55q.mp4#t=0.1"
  ></video>
</div>

      
      

      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Ballet Collection</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {balletShoes.map((shoe, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={shoe.src}
                alt={shoe.name}
                className="w-64 h-64 object-contain rounded-lg shadow-md hover:scale-105 transition"
              />
              <p className="mt-2 text-center text-lg font-medium">{shoe.name}</p>
            </div>
          ))}
        </div>
      </div>

    
      <div className="flex justify-center py-10">
        <button
          onClick={() => navigate("/products")}
          className="bg-gradient-to-r from-black to-indigo-500 text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition"
          >
            View All Products
          </button>
          </div>
          </div>
  );
}