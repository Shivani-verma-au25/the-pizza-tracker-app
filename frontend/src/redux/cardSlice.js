import { createSlice } from "@reduxjs/toolkit";

const saveCardToLocalStorage = localStorage.getItem("cart");

const initialState = saveCardToLocalStorage ? JSON.parse(saveCardToLocalStorage) : {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
};



const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart:(state, action) => {
      console.log(action.payload);
      
      const newItem = action.payload;
      console.log("new ", newItem);

      // find pizza and size
      const existsPizza = state.cart.find(
        (item) =>
          item.pizzaId === newItem.pizzaId && item.size === newItem.size,
      );

      // if pizza exists
      if (existsPizza) {
        //  increase the pizza quantity
        existsPizza.quantity += newItem.quantity;
      } else {
        // push pizza object into cart
        state.cart.push(newItem);
      }

      // update quatity and total price
      state.totalQuantity += newItem.quantity;
      state.totalPrice += newItem.price * newItem.quantity;
    },

    removeFromCart: (state, action) => {
      const { pizzaId, size } = action.payload;

      const cartItem = state.cart.find(
        (item) => item.pizzaId === pizzaId && item.size === size,
      );

      if (!cartItem) return;

      state.totalQuantity -= cartItem.quantity;
      state.totalPrice -= cartItem.price * cartItem.quantity;

      state.cart = state.cart.filter(
        (item) => !(item.pizzaId === pizzaId && item.size === size)
      );
      
    },

    increseQuantity: (state, action) => {
      const { pizzaId, size } = action.payload;
      const cart = state.cart.find(
        (item) => item.pizzaId === pizzaId && item.size === size,
      );

      if (!cart) return;

      cart.quantity += 1;
      state.totalQuantity += 1;
      state.totalPrice += cart.price;
    },


    decreaseQty :(state, action)=> {
      const { pizzaId, size } = action.payload;

      const cart = state.cart.find(
        item => item.pizzaId === pizzaId && item.size === size
      );

      if (!cart) return;

      cart.quantity -= 1;
      state.totalQuantity -= 1;
      state.totalPrice -= cart.price;

      if (cart.quantity === 0) {
        state.cart = state.cart.filter(
          i => !(i.pizzaId === pizzaId && i.size === size)
        );
      }
    },

    clearCart(state) {
      state.cart = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    }
  }
});

export const {addToCart , removeFromCart ,increseQuantity ,decreaseQty , clearCart} = cartSlice.actions;
export default cartSlice.reducer;