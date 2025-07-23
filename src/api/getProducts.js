import store from "../redux/store";
import { setProducts } from "../redux/productsSlice";

import { supabase } from "../supabase/SupabaseClient"

const getProducts = async () => {
    try{
        const response = await supabase.from("products").select("*")
        store.dispatch(setProducts(response.data))
    }catch (error) {
        console.log(error)
    }
}

export default getProducts