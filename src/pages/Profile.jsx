import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { logOut } from "../redux/userSlice"
import { useNavigate } from "react-router"

export default function Profile() {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log('user', user)

    const logOutFromAcc = () => {
        navigate('/login', {replace: true})
        dispatch(logOut())
    }

  return (
    <div>
        <div>
            {user.user.email}
        </div>
        <div>
            <button onClick={logOutFromAcc}>Log Out</button>
        </div>
    </div>
  )
}
