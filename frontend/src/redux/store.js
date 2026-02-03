import { configureStore } from "@reduxjs/toolkit";
import userReduces from '../redux/usesSlice'
import cartReducer from '../redux/cardSlice'

export const store = configureStore({
    reducer:{
        auth : userReduces,
        cart : cartReducer,
    }
})