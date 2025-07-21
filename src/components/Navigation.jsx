import { NavLink, Outlet } from "react-router"
import '../styles/Navigation.css'
import { FaShoppingCart } from "react-icons/fa";


export default function Navigation() {
  return (
    <div>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cart"><FaShoppingCart/></NavLink>
            <NavLink to="/registration">Registration</NavLink>
        </nav>

        <Outlet/>
    </div>
  )
}
