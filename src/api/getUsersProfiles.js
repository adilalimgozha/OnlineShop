import store from "../redux/store";
import { setUsersProfiles } from "../redux/usersProfilesSlice";

import { supabase } from "../supabase/SupabaseClient"


const getUsersProfiles = async () => {
    try{
        const response = await supabase.from("users_profiles").select("*")
        store.dispatch(setUsersProfiles(response.data))
    }catch (error) {
        console.log(error)
    }
}

export default getUsersProfiles