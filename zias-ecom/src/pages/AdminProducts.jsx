import React, { useState, useEffect } from "react";
import {
  getProducts,
  addProduct,
  updateProduct,
  softDeleteProduct,
} from "../services/productService";
import { Pencil, Trash2 } from "lucide-react";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    image: "",
    stock: "",
    status: true,
  });
  const [editingId, setEditingId] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState("");

  // ✅ Pagination (Only "Next")
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const fetchProducts = async () => {
    const data = await getProducts(categoryFilter);
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
    setCurrentPage(1);
  }, [categoryFilter]);

  // ✅ Handle Add / Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateProduct(editingId, form);
      } else {
        await addProduct(form);
      }

      setForm({
        name: "",
        category: "",
        price: "",
        description: "",
        image: "",
        stock: "",
        status: true,
      });
      setEditingId(null);
      fetchProducts();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleEdit = (product) => {
    setForm(product);
    setEditingId(product.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    await softDeleteProduct(id);
    fetchProducts();
  };

  // ✅ Pagination Logic
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = 0; // Always show from start to current page
  const visibleProducts = products.slice(indexOfFirst, indexOfLast);

  const handleNext = () => {
    if (indexOfLast < products.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            Manage Products
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Add, update, and manage your store’s products easily
          </p>
        </div>

        {/* Filter */}
        <div className="flex items-center gap-3">
          <label className="font-medium text-gray-600 text-sm">
            Filter by Category:
          </label>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border border-gray-300 bg-gray-50 text-sm rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="">All</option>
            <option value="Shoes">Shoes</option>
            <option value="Sneakers">Sneakers</option>
            <option value="Sports">Sports</option>
          </select>
        </div>
      </div>

      {/* Product Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg mb-10 border border-gray-200"
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          {editingId ? "Edit Product" : "Add New Product"}
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <input
            className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Product Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Category"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            required
          />
          <input
            type="number"
            className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Price"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            required
          />
          <input
            type="number"
            className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Stock"
            value={form.stock}
            onChange={(e) => setForm({ ...form, stock: e.target.value })}
            required
          />
          <input
            className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Image URL"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            required
          />
          <select
            className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            value={form.status ? "true" : "false"}
            onChange={(e) =>
              setForm({ ...form, status: e.target.value === "true" })
            }
          >
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </div>

        <textarea
          className="border border-gray-300 p-3 w-full mt-4 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Product Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        ></textarea>

        <button
          type="submit"
          className="mt-5 bg-gradient-to-r from-black to-indigo-500 text-white px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition"
        >
          {editingId ? "Update Product" : "Add Product"}
        </button>
      </form>

      {/* Product Table */}
      <div className="overflow-x-auto bg-white shadow-xl border border-gray-200 rounded-2xl">
        <table className="min-w-full text-sm">
          <thead className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 uppercase text-xs tracking-wide">
            <tr>
              <th className="py-3 px-6 text-left font-semibold">Image</th>
              <th className="py-3 px-6 text-left font-semibold">Name</th>
              <th className="py-3 px-6 text-left font-semibold">Category</th>
              <th className="py-3 px-6 text-left font-semibold">Price</th>
              <th className="py-3 px-6 text-left font-semibold">Stock</th>
              <th className="py-3 px-6 text-left font-semibold">Status</th>
              <th className="py-3 px-6 text-center font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            {visibleProducts.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50 transition">
                <td className="py-4 px-6">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-16 h-16 object-cover rounded-lg border shadow-sm"
                  />
                </td>
                <td className="py-4 px-6 font-medium">{p.name}</td>
                <td className="py-4 px-6">{p.category}</td>
                <td className="py-4 px-6 font-semibold">₹{p.price}</td>
                <td className="py-4 px-6">{p.stock}</td>
                <td className="py-4 px-6">
                  {p.status ? (
                    <span className="text-green-600 font-semibold">Active</span>
                  ) : (
                    <span className="text-red-600 font-semibold">Inactive</span>
                  )}
                </td>
                <td className="py-4 px-6 flex justify-center gap-2">
                  <button
                    onClick={() => handleEdit(p)}
                    className="text-black px-3 py-1.5 rounded-md text-xs font-medium transition hover:bg-gray-100"
                  >
                    <Pencil size={14} />
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="text-red-600 px-3 py-1.5 rounded-md text-xs font-medium transition hover:bg-red-50"
                  >
                    <Trash2 size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {products.length === 0 && (
          <div className="py-10 text-center text-gray-500">
            No products found.
          </div>
        )}
      </div>

      {/* ✅ Only “Next” Button */}
      {indexOfLast < products.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleNext}
            className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition shadow-md"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
