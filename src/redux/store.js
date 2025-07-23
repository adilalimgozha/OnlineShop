import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice"
import cartReducer from './cartSlice'
import usersSlice from "./usersSlice";
import reviewsReducer from "./reviewsSlice";

const store = configureStore({
    reducer:{
        products: productsReducer,
        cart: cartReducer,
        users: usersSlice,
        reviews: reviewsReducer,
    }
})

export default store