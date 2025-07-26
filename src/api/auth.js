import { supabase } from "../supabase/SupabaseClient";

const loginUser = async (email, password) => {
    
        const {data, error} = await supabase.auth.signInWithPassword({
            email,
            password
        })
        if (error) throw new Error(error.message);
        const {session} = data
        console.log('data', data)

        return {
            token: session.access_token,
        }
}

const registerUser = async (email, password) => {
    const {data, error} = await supabase.auth.signUp({
        email,
        password
    })

    if (error) throw new Error(error.message)
    const {user} = data
    return user.id
}

export {loginUser, registerUser}