// import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const placeOrder=createAsyncThunk(
//     "orders/place",
//     async(order)=>{
//         const res=await axios.post("http://localhost:5000/orders",order);
//         return res.data;
//     }
// );

// export const fetchProducts=createAsyncThunk(
//     "orders/fetch",
//     async(userId)=>{
//         const res=await axios.get(`http://localhost:5000/orders?userId=${userId}`);
//         return res.data;
//     }
// );

// const orderSlice=createSlice({
//     name:"orders",
//     initialState:{ items:[],status:"idle"},
//     reducers:{},
//     extraReducers:(builder)=>{
//         builder.addCase(placeOrder.fulfilled,(state,action)=>{
//             state.items.push(action.payload);
//         });
//         builder.addCase(fetchProducts.fulfilled,(state,action)=>{
//             state.items=action.payload;
//         }); 
//     }
// })

// export default orderSlice.reducer;



import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const placeOrder = createAsyncThunk(
  "orders/place",
  async (order) => {
    const res = await axios.post("http://localhost:5000/orders", order);
    return res.data;
  }
);

export const fetchOrders = createAsyncThunk(
  "orders/fetch",
  async (userId) => {
    const res = await axios.get(`http://localhost:5000/orders?userId=${userId}`);
    return res.data;
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState: { items: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(placeOrder.fulfilled, (state, action) => {
      state.items.push(action.payload);
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  }
});

export default orderSlice.reducer;
