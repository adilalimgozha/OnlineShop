import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { logOut } from "../redux/userSlice"
import { useNavigate } from "react-router"
import { useEffect } from "react"
import getUsersProfiles from "../api/getUsersProfiles"
import { useState } from "react"


export default function Profile() {

    const user = useSelector(state => state.user)
    const usersProfiles = useSelector(state => state.usersProfiles.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [currentUserProfile, setCurrentUserProfile] = useState(null);

    useEffect(() => {
        getUsersProfiles()
    },[])

    useEffect(() => {
        if (user?.user && usersProfiles.length > 0){
            const found = usersProfiles.find(userProf => userProf.userUid === user.user.id)
            setCurrentUserProfile(found)
        }
    },[user, usersProfiles])

    const logOutFromAcc = () => {
        navigate('/login', {replace: true})
        dispatch(logOut())
    }

    console.log(usersProfiles)
    console.log(currentUserProfile)

    if (!currentUserProfile){
        return <div>Loading...</div>
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
