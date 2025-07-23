import { supabase } from "../supabase/SupabaseClient"
import store from "../redux/store"

import { setReviews } from "../redux/reviewsSlice"

const getReviews = async () => {
    try{
        const response = await supabase.from('reviews').select('*')
        store.dispatch(setReviews(response.data))
    }catch(error){
        console.log(error)
    }
}

export default getReviews