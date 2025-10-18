import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001",
});

export const getProducts = () => API.get("/products");
export const getOrders = () => API.get("/orders");
export const createOrder = (order) => API.post("/orders", order);
