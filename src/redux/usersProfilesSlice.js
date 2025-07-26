import { createSlice } from "@reduxjs/toolkit";

const usersProfilesSlice = createSlice({
    name: "usersProfiles",
    initialState: {
        value: []
    },

    reducers:{
        setUsersProfiles(state, action){
            state.value = action.payload
        }
    }
})

export const {setUsersProfiles} = usersProfilesSlice.actions
export default usersProfilesSlice.reducer