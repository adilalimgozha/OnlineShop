import { Navigate } from "react-router"
import { useSelector } from "react-redux"

export default function PrivateRoute({children}) {

    const isAuthenticated = useSelector(state => state.user.isAuthenticated)

    if (!isAuthenticated){
        return <Navigate to={'/login'} replace/>
    }else{
        return children
    }

    
}
