import { useParams } from "react-router"
import { useSelector, useDispatch } from "react-redux"
import {addToCart, removeFromCart} from '../redux/cartSlice'
import Comment from "../components/Comment"

export default function ProductDetail() {

    let {prodId} = useParams()
    const allProducts = useSelector(state => state.products.value)
    const cart = useSelector(state => state.cart.value)
    const prod = allProducts.find(prod => prod.id === Number(prodId))
    const reviews = useSelector(state => state.reviews.value)
    const dispatch = useDispatch()

    const neededReviews = reviews.filter(review => review.productId === Number(prodId))

    console.log(reviews)

    let button
    console.log('dsadas', cart)
    if (cart.some(product => product.id === Number(prodId))){
        button = <button onClick={() => dispatch(removeFromCart(prod))}>Remove from Cart</button>
    }else{
        button = <button onClick={() => dispatch(addToCart(prod))}>Add to Cart</button>
    }



    return (
        <div>
            <div>
            <img className='productImage' src={prod.images} alt="product image" />
            </div>
            <div className='title'>
                <span className='name'>{prod.title}</span>
            </div>
            <div className='description'>
                {prod.description}
            </div>
            <div className='price'>
                ${prod.price}
            </div>
            <div>
                {button}
            </div>

            <form>
                <input type="text" />
                <button type="submit">Send</button>
            </form>

            <div className="reviews">
                {neededReviews.map((review, index) => <Comment key={index} review={review}/>)}
            </div>
        </div>
    )
}
