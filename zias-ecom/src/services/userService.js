import axios from "axios";

const API_URL = "http://localhost:5000/users";

export const getUsers = async () => {
  const res = await axios.get(API_URL);
  return res.data.filter(u => u.active !== false);
};


export const getUserById = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

export const toggleBlockUser = async (id, blockedStatus) => {
  await axios.patch(`${API_URL}/${id}`, { blocked: blockedStatus });
};


export const softDeleteUser = async (id) => {
  await axios.patch(`${API_URL}/${id}`, { active: false });
};
