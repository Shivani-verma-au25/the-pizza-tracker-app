import { configureStore } from "@reduxjs/toolkit";
import userReduces from '../redux/usesSlice'

export const store = configureStore({
    reducer:{
        auth : userReduces
    }
})