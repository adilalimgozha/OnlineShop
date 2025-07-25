import { createSlice } from "@reduxjs/toolkit"
import {jwtDecode} from "jwt-decode";

const tokenFromLocalStorage = localStorage.getItem('token')

const isTokenvalid = (token) => {
    if (!token) return false
    try{
        const payload = JSON.parse(atob(token.split('.')[1]))
        return  payload.exp > Date.now() / 1000
    }catch{
        return false
    }
}

let user = null
if (tokenFromLocalStorage && isTokenvalid(tokenFromLocalStorage)) {
    try {
        const decoded = jwtDecode(tokenFromLocalStorage)
        user = {
            id: decoded.sub,
            email: decoded.email,
            role: decoded.role,
        }
    } catch (error) {
        console.error(error)
    }
}


const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuthenticated: tokenFromLocalStorage && isTokenvalid(tokenFromLocalStorage),
        token: tokenFromLocalStorage || null,
        user: user,
    },
    reducers: {
        setUser(state, action){
            state.isAuthenticated = true
            state.token = action.payload.token
            localStorage.setItem('token', action.payload.token)

            try{
                const decoded = jwtDecode(action.payload.token)
                state.user = {
                    id: decoded.sub,
                    email: decoded.email,
                    role: decoded.role,
                }
            }catch(error){
                console.log(error)
            }
            console.log('user in store', state.isAuthenticated)
        },

        logOut(state) {
            state.isAuthenticated = false
            state.token = null
            state.user = null
            localStorage.removeItem("token")
            localStorage.removeItem("sb-dbmarlzqwbtiunzeqgxq-auth-token")
        }

        
    }
})

export const {setUser, logOut} = userSlice.actions
export default userSlice.reducer