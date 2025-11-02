import axios from "axios";

const API_URL = "http://localhost:5000/products";


export const getProducts = async (category = "") => {
  const res = await axios.get(API_URL);
  const data = res.data.filter(p => p.active !== false);
  return category ? data.filter(p => p.category === category) : data;
};


export const addProduct = async (product) => {
  const res = await axios.get(API_URL);
  const exists = res.data.find(p => p.name.toLowerCase() === product.name.toLowerCase());
  if (exists) throw new Error("Product already exists");
  await axios.post(API_URL, { ...product, active: true });
};

export const updateProduct = async (id, updatedData) => {
  await axios.patch(`${API_URL}/${id}`, updatedData);
};


export const softDeleteProduct = async (id) => {
  await axios.patch(`${API_URL}/${id}`, { active: false });
};
