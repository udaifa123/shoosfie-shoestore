// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import ProductDetail from "./pages/ProductDetail";
// import Cart from "./pages/Cart";
// import CheckoutPage from "./pages/CheckoutPage";
// import Orders from "./pages/Orders";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import AdminDashboard from "./pages/AdminDashboard";
// import ProductsPage from "./pages/Products";
// import Users from "./pages/Users";
// import ProtectedRoute from "./components/ProtectedRoute";
// import Footer from "./components/Footer";




// // function ProtectedRoute({ children }) {
// //   const user = JSON.parse(localStorage.getItem("user"));
// //   if (!user) {
// //     return <Navigate to="/login" replace />;
// //   }
// //   return children;
// // }

// export default function App() {
//   const user=JSON.parse(localStorage.getItem("user"));
  
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

        
//         <Route path="/products" element={<Products />} />
//         <Route path="/checkout" element={<CheckoutPage />} /> 
//         <Route path="/orders" element={<Orders />} />
//         {/* <Route path="products" element={<ProductsPage />} />
//         <Route path="users" element={<UsersPage />} />  */}

        
        
//         <Route
//           path="/products"
//           element={
//             <ProtectedRoute>
//               <Products />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/product/:id"
//           element={
//             <ProtectedRoute>
//               <ProductDetail />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/cart"
//           element={
//             <ProtectedRoute>
//               <Cart />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/orders"
//           element={
//             <ProtectedRoute>
//               <Orders />
//             </ProtectedRoute>
//           }
//         />



        
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>

//       <Footer/>
//     </Router>
//   );
// }



// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./redux/store";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import ProductDetail from "./pages/ProductDetail";
// import Cart from "./pages/Cart";
// import CheckoutPage from "./pages/CheckoutPage";
// import Orders from "./pages/Orders";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import AdminDashboard from "./pages/AdminDashboard";
// // import ProductsPage from "./pages/Products";
// import Users from "./pages/Users";
// import ProtectedRoute from "./components/ProtectedRoute";

// export default function App() {
//   const user = JSON.parse(localStorage.getItem("user"));

//   return (
//     <Provider store={store}>
//     <Router>
//       <Navbar />
//       <Routes>
        
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

        
//         <Route
//           path="/products"
//           element={
//             <ProtectedRoute>
//               <Products />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/product/:id"
//           element={
//             <ProtectedRoute>
//               <ProductDetail />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/cart"
//           element={
//             <ProtectedRoute>
//               <Cart />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/checkout"
//           element={
//             <ProtectedRoute>
//               <CheckoutPage />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/orders"
//           element={
//             <ProtectedRoute>
//               <Orders />
//             </ProtectedRoute>
//           }
//         />

      
//         <Route
//           path="/admin/*"
//           element={
//               <ProtectedRoute role="admin">
//                 <AdminDashboard/>
//               </ProtectedRoute>
//           }
//         >
//           <Route index element={<div>Welcome to AdminDashboard</div>} />
//           <Route path="products" element={<Products />} />
//           <Route path="users" element={<Users />} />
//         </Route>

      
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//       <Footer />
//     </Router>
//     </Provider>
//   );
// }





import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
// import Users from "./pages/Users";
import Profile from "./pages/Profile";
import Success from "./pages/Success";
import Wishlist from "./pages/Wishlist";
import AdminProducts from "./pages/AdminProducts";
import AdminUsers from "./pages/AdminUsers";
import AdminOrders from "./pages/AdminOrders";
import AdminOverview from "./pages/AdminOverview";
import AdminAnalytics from "./pages/AdminAnalytics";
import Signup from "./pages/Signup";
import AdminSettings from "./pages/AdminSettings";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/success" element={<Success />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route path="/product/:id" element={<ProductDetail />} />
          {/* <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path="/checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />
          <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} /> */}

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>}>
            <Route index element={<div>Welcome to Admin Dashboard</div>} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="overview" element={<AdminOverview />} />
            <Route path="analytics" element={<AdminAnalytics />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}
