import { supabase } from "../supabase/SupabaseClient"
import getReviews from "./getReviews"

const postReview = async (comment, rating, date, productId, userProfileId) => {
    try{
        const data = await supabase.from("reviews").insert([
            {
                rating,
                comment,
                date,
                productId,
                userProfileId
            }
        ])
        getReviews()
        
    }catch(error){
        console.log(error)
    }
}

export default postReview