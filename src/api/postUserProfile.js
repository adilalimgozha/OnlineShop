import { supabase } from "../supabase/SupabaseClient";

const postUserProfile = async (firstName, lastName, userUid) => {
    try{
        const data = await supabase.from('users_profiles').insert([
            {
                firstName,
                lastName,
                userUid
            }
        ])
    
    }catch(error){
        console.log(error)
    }
}

export default postUserProfile