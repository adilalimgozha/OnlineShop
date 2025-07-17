import { useParams } from "react-router"
import { useSelector, useDispatch } from "react-redux"
import {addToCart, removeFromCart} from '../redux/cartSlice'

export default function ProductDetail() {

    let {prodId} = useParams()
    const allProducts = useSelector(state => state.products.value)
    const cart = useSelector(state => state.cart.value)
    const prod = allProducts.find(prod => prod.id === Number(prodId))
    const dispatch = useDispatch()

    let button
    console.log('dsadas', cart)
    if (cart.some(product => product.id === Number(prodId))){
        button = <button onClick={() => dispatch(removeFromCart(prod))}>Remove from Cart</button>
    }else{
        button = <button onClick={() => dispatch(addToCart(prod))}>Add to Cart</button>
    }

    return (
        <div>
        {prod.id} <br/>
        {prod.title}
        <div>
            {button}
        </div>
        </div>
    )
}
