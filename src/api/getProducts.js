import axios from "axios";
import store from "../redux/store";
import { setProducts } from "../redux/productsSlice";

const getProducts = async () => {
    try{
        const response = await axios.get("https://dummyjson.com/products")
        store.dispatch(setProducts(response.data.products))
    }catch (error) {
        console.log(error)
    }
}

export default getProducts