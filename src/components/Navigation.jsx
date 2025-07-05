import { NavLink, Outlet } from "react-router"


export default function Navigation() {
  return (
    <div>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cart">Cart</NavLink>
        </nav>

        <Outlet/>
    </div>
  )
}
