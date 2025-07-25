import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice"
import cartReducer from './cartSlice'
import userReducer from "./userSlice";
import reviewsReducer from "./reviewsSlice";

const store = configureStore({
    reducer:{
        products: productsReducer,
        cart: cartReducer,
        user: userReducer,
        reviews: reviewsReducer,
    }
})

export default store