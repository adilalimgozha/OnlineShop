import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { logOut } from "../redux/userSlice"
import { useNavigate } from "react-router"

//сделать добавление ревью от пользователя и стилизацию профиля и регистрации

export default function Profile() {

    const user = useSelector(state => state.user)
    const usersProfiles = useSelector(state => state.usersProfiles.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const currentUserProfile = usersProfiles.find(userProf => user.user.id === userProf.userUid)

    

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
            {currentUserProfile.firstName} {currentUserProfile.lastName}
        </div>
        <div>
            <button onClick={logOutFromAcc}>Log Out</button>
        </div>
    </div>
  )
}
