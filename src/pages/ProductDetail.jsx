import { useParams } from "react-router"
import { useSelector, useDispatch } from "react-redux"
import Comment from "../components/Comment"
import { useEffect, useState } from "react"
import postReview from "../api/postReview"
import getReviews from "../api/getReviews"
import getProducts from "../api/getProducts"
import getUsersProfiles from "../api/getUsersProfiles"
import deleteCart from "../api/deleteCart"
import postCart from '../api/postCart'

export default function ProductDetail() {

    let {prodId} = useParams()

    const [currentUserProfile, setCurrentUserProfile] = useState(null);
    const [prod, setProd] = useState(null)
    const [message, setMessage] = useState(null)

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


    const handleAddToCart = async () => {
        try {
            const response = await postCart(Number(prodId), currentUserProfile.id)
        } catch (error) {
            console.log(error)
        }
    }


    const handleDeleteFromCart = async () => {
        try {
            const response = await deleteCart(Number(prodId), currentUserProfile.id)
        } catch (error) {
            console.log(error)
        }
    }

    let button
    console.log('cart', cart)
    if (cart.some(item => item.prod_id === Number(prodId))){
        button = <button onClick={handleDeleteFromCart}>Remove from Cart</button>
    }else{
        button = <button onClick={handleAddToCart}>Add to Cart</button>
    }

    const handleCommentChange = (e) => {
        setComment(e.target.value)
    }

    const handleRatingChange = (e) => {
        setRating(e.target.value)
    }
    
    
    const handleCreateReview = async(e) => {
        e.preventDefault()
        if (!user.isAuthenticated){
            setMessage("You have to Sign In to leave a review")
        }else{
            try{
                const response = await postReview(comment, Number(rating), formattedDate, Number(prodId), currentUserProfile.id)
                setComment("")
                setRating("")
            }catch(error){
                console.log(error)
            }
        }
        
    }
    console.log(prod)
    console.log(currentUserProfile)
    console.log(message)
    console.log('cart', cart)

    if (user.isAuthenticated ){
        if (!currentUserProfile || !prod){
            return <div>Loading...</div>
        }
    }else{
        if (!prod){
            return <div>Loading...</div>
        }
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
            <div className='stock'>
                Stock: {prod.stock}
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
            <div>
                {message}
            </div>

            <div className="reviews">
                {neededReviews.map((review, index) => <Comment key={index} review={review}/>)}
            </div>
        </div>
    )
}
