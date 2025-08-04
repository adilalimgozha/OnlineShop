import { supabase } from "../supabase/SupabaseClient"
import getCart from "./getcart"

const deleteCart = async (productId, userProfileId) => {
    try {
        const response = await supabase.from("cart").delete().eq('prod_id', productId).eq('userProf_id', userProfileId)
        getCart(userProfileId)
    } catch (error) {
        console.log(error)
    }
}

export default deleteCart