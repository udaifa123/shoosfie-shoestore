import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-100 text-neutral-800 py-12 mt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">Shoosifie</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Step into style — premium shoes for every walk of life.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link to="/" className="hover:text-black transition">Home</Link></li>
            <li><Link to="/products" className="hover:text-black transition">Shop</Link></li>
            <li><Link to="/cart" className="hover:text-black transition">Cart</Link></li>
            <li><Link to="/orders" className="hover:text-black transition">Orders</Link></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link to="/about" className="hover:text-black transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-black transition">Contact</Link></li>
            <li><Link to="/faq" className="hover:text-black transition">FAQ</Link></li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
          <p className="text-sm text-gray-600 mb-2">Registered Office:</p>
          <address className="text-sm text-gray-600 mb-4 not-italic leading-relaxed">
            Shoosifie Internet Pvt Ltd<br />
            Alakode, Kannur, 670571<br />
            Kerala, India<br />
            CIN: U6001S89K0CPT006145104<br />
            Phone: 022-89512500 / 00-62788697996
          </address>
          <div className="flex space-x-4 text-xl text-gray-500">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 text-center text-xs text-gray-500 border-t border-gray-300">
        © {new Date().getFullYear()} Shoosifie. All rights reserved.
      </div>
    </footer>
  );
}
