import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user")) || null;

const authSlice = createSlice({
  name: "auth",
  initialState: { user },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      localStorage.removeItem("cart");
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
