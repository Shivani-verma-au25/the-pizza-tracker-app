import { createSlice } from "@reduxjs/toolkit";

// const saveCardToLocalStorage = localStorage.getItem("cart");

const initialState = {
  cart: [],
};



const cartSlice = createSlice({
  name: "cart",
  initialState,


});

export const {} = cartSlice.actions;
export default cartSlice.reducer;