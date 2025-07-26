import { useEffect, useState } from "react"
import { setUser } from "../redux/userSlice"
import {loginUser} from "../api/auth"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { Link } from "react-router"
import getUsersProfiles from "../api/getUsersProfiles"


export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const user = useSelector(state => state.user)
  const usersProfiles = useSelector(state => state.usersProfiles.value)
  console.log('users Profiles', usersProfiles)
  

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    getUsersProfiles()
  },[])

  const loginHandle = async (e) => {
    e.preventDefault()
    console.log(user)
    try{
      const response = await loginUser(email, password)
      dispatch(setUser(response))
      console.log("response", response)
      navigate('/')
    }catch(error){
      console.log(error)
    }
  }

  const emailChangeHandle = (e) => {
    setEmail(e.target.value)
  }

  const passwordChangeHandle = (e) => {
    setPassword(e.target.value)
  }

  console.log(email, password)
  

  return (
    <div>
      <div>
        Login
      </div>
      <div>
        <form>
          <div>
            <label htmlFor="email" >Enter Email</label><br />
            <input value={email} type="email" id="email" onChange={emailChangeHandle} placeholder="Your email" />
          </div>
          <div>
            <label htmlFor="password">Enter Password</label><br />
            <input value={password} type="password" id="password" onChange={passwordChangeHandle} placeholder="Your password" /><br />
          </div>
          <button type="submit" onClick={loginHandle}>Sign In</button>
        </form>
      </div>

      <div>
        <span>Don't have an account?</span>
        <div>
          <Link to='/registration'>Sign Up</Link>
        </div>
      </div>
    </div>
  )
}
