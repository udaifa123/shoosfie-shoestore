import {createSlice} from '@reduxjs/toolkit'

const initialState={
      items:JSON.parse(localStorage.getItem("cart")) || []
};
const cartSlice=createSlice({
     name:'cart',
     initialState,
     reducers:{
        addToCart:(state,action)=> {
            const existing=state.items.find(i=>i.id===action.payload.id);
            if(existing)existing.quandity += 1;
            else state.items.push({...action.payload,quandity:1});
            localStorage.setItem('cart',JSON.stringify(state.items))
        },
        removeFromCart:(state,action)=> {
            state.items=state.items.filter(i=> i.id !==action.payload);
            localStorage.setItem("cart",JSON.stringify(state.items));
            return updated;
        },
        clearCart:(state)=> {
            state.items=[]; 
            localStorage.removeItem('cart');
        },
        updateQuandity:(state,action)=>{
            const item=state.items.find(i=>i.id===action.payload.id);
            if(item) item.quandity=action.payload.quandity;
            localStorage.setItem("cart",JSON.stringify(state.items));
        }
     }
});
export const { addToCart, removeFromCart, clearCart,updateQuandity} =cartSlice.actions
export default cartSlice.reducer

