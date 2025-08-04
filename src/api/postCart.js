import { supabase } from "../supabase/SupabaseClient";
import getCart from "./getcart";


const postCart = async (prod_id, userProf_id) => {
    try{
        const data = await supabase.from('cart').insert([
            {
                prod_id,
                userProf_id
            }
        ])
    getCart(userProf_id)
    }catch(error){
        console.log(error)
    }
}

export default postCart