import { NavLink, Outlet } from "react-router"
import '../styles/Navigation.css'
import { FaShoppingCart } from "react-icons/fa";
import {useSelector} from 'react-redux'


export default function Navigation() {

  let content
  const isAuth = useSelector(state => state.user.isAuthenticated)

  if (!isAuth) {
    content = <NavLink to="/login">Login</NavLink>
  }else{
    content = <NavLink to="/profile">Profile</NavLink>
  }
  return (
    <div>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cart"><FaShoppingCart/></NavLink>
            {content}
        </nav>

        <Outlet/>
    </div>
  )
}
