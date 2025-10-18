import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get("http://localhost:5000/products");
    return res.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: { items: [], status: "idle" }, 
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload; 
      state.status = "succeeded";
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default productsSlice.reducer;
