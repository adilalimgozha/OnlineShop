import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice"
import cartReducer from './cartSlice'
import usersSlice from "./usersSlice";

const store = configureStore({
    reducer:{
        products: productsReducer,
        cart: cartReducer,
        users: usersSlice,
    }
})

export default store