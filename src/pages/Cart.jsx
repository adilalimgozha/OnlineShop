import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { removeFromCart } from "../redux/cartSlice"

export default function Cart() {

  const cart = useSelector(state => state.cart.value)
  const dispatch = useDispatch()

  let content
  if (cart.length === 0){
    content = "Your Cart is empty"
  }else{
    content = cart.map(element => <div key={element.id}>
      {element.id} {element.title}
      <span><button onClick={() => dispatch(removeFromCart(element))}>Remove</button></span>
      </div>)
  }

  return (
    <div>
      {content}
    </div>
  )
}
