import { supabase } from "../supabase/SupabaseClient"
import store from "../redux/store"
import { setCart } from "../redux/cartSlice"

const getCart = async (userProf_id) => {
    try {
        const response = await supabase.from("cart").select("*").eq('userProf_id', userProf_id)
        store.dispatch(setCart(response.data))
    } catch (error) {
        console.log(error)
    }
}

export default getCart