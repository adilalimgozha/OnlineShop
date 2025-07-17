import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.value.push(action.payload)
        },
        removeFromCart: (state, action) => {
            state.value = state.value.filter(prod => prod.id !== action.payload.id)
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer