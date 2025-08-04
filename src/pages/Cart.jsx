import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import deleteCart from "../api/deleteCart"


export default function Cart() {

  const cart = useSelector(state => state.cart.value)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleDeleteFromCart = async (prodId, currentUserProfileId) => {
        try {
            const response = await deleteCart(prodId, currentUserProfileId)
        } catch (error) {
            console.log(error)
        }
    }

  let content
  if (!user.isAuthenticated){
    content = "You have to Log In"
  }
  else{
    if (cart.length === 0){
      content = "Your Cart is empty"
    }else{
      content = cart.map(item => <div key={item.id}>
        {item.prod_id} {item.userProf_id}
        <span><button onClick={() => handleDeleteFromCart(item.prod_id, item.userProf_id)}>Remove</button></span>
        </div>)
    }
  }

  return (
    <div>
      {content}
    </div>
  )
}
