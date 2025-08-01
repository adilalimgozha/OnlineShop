import { useParams } from "react-router"
import { useSelector, useDispatch } from "react-redux"
import {addToCart, removeFromCart} from '../redux/cartSlice'
import Comment from "../components/Comment"
import { useEffect, useState } from "react"
import postReview from "../api/postReview"
import getReviews from "../api/getReviews"
import getProducts from "../api/getProducts"
import getUsersProfiles from "../api/getUsersProfiles"

export default function ProductDetail() {

    let {prodId} = useParams()

    const [currentUserProfile, setCurrentUserProfile] = useState(null);
    const [prod, setProd] = useState(null)

    const [rating, setRating] = useState("")
    const [comment, setComment] = useState("")

    const allProducts = useSelector(state => state.products.value)
    const cart = useSelector(state => state.cart.value)
    const user = useSelector(state => state.user)
    const usersProfiles = useSelector(state => state.usersProfiles.value)
    const reviews = useSelector(state => state.reviews.value)
    const dispatch = useDispatch()
    const date = new Date()
    const formattedDate = `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`
    

    const neededReviews = reviews.filter(review => review.productId === Number(prodId))

    useEffect(() => {
        getReviews()
        getProducts()
        getUsersProfiles()
    }, [])

    useEffect(() => {
        if (user?.user && usersProfiles.length > 0){
            const found = usersProfiles.find(userProf => userProf.userUid === user.user.id)
            setCurrentUserProfile(found)
            
        }
    },[user, usersProfiles])

    useEffect(() => {
        if (allProducts.length > 0){
            const found = allProducts.find(prod => prod.id === Number(prodId))
            setProd(found)
        }
    },[allProducts])

    let button
    console.log('dsadas', cart)
    if (cart.some(product => product.id === Number(prodId))){
        button = <button onClick={() => dispatch(removeFromCart(prod))}>Remove from Cart</button>
    }else{
        button = <button onClick={() => dispatch(addToCart(prod))}>Add to Cart</button>
    }

    const handleCommentChange = (e) => {
        setComment(e.target.value)
    }

    const handleRatingChange = (e) => {
        setRating(e.target.value)
    }
    
    const handleCreateReview = async(e) => {
        e.preventDefault()
        try{
            const response = await postReview(comment, Number(rating), formattedDate, Number(prodId), currentUserProfile.id)
        }catch(error){
            console.log(error)
        }
    }
    console.log(prod)
    console.log(currentUserProfile)

    if (!currentUserProfile || !prod){
        return <div>Loading...</div>
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
                <label htmlFor="comment">Your Comment</label>
                <input name="comment" value={comment} type="text" onChange={handleCommentChange}/>
                <label htmlFor="rating">Your Rating</label>
                <input name="rating" value={rating} type="text" onChange={handleRatingChange} />
                <button type="submit" onClick={handleCreateReview}>Send</button>
            </form>

            <div className="reviews">
                {neededReviews.map((review, index) => <Comment key={index} review={review}/>)}
            </div>
        </div>
    )
}
