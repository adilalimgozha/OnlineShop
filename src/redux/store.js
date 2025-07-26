import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice"
import cartReducer from './cartSlice'
import userReducer from "./userSlice";
import reviewsReducer from "./reviewsSlice";
import usersProfilesReducer from "./usersProfilesSlice"

const store = configureStore({
    reducer:{
        products: productsReducer,
        cart: cartReducer,
        user: userReducer,
        reviews: reviewsReducer,
        usersProfiles: usersProfilesReducer
    }
})

export default store