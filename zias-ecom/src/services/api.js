import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const getProducts = () => API.get("/products");
export const getOrders = () => API.get("/orders");
export const createOrder = (order) => API.post("/orders", order);  


