import { createSlice } from "@reduxjs/toolkit"

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState:{
        value: []
    },
    reducers:{
        setReviews(state, action){
            state.value = action.payload
        }
    }
})

export const {setReviews} = reviewsSlice.actions
export default reviewsSlice.reducer