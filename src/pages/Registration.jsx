import { useState } from "react"
import { registerUser } from "../api/auth"
import { useNavigate } from "react-router"
import postUserProfile from "../api/postUserProfile"
import "../styles/Registration.css"


export default function Registration() {

    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSignUp = async (e, email, password) => {
        e.preventDefault()
        try{
            const userId = await registerUser(email, password)
            await postUserProfile(firstName, lastName, userId)
            console.log(userId)
            navigate('/login')
        }catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="registration">
        <div className="registration-embeded">
        <h1>
            Registration
        </h1>
        <div>
            <form>
                <div className="email">
                    <label htmlFor="email">Enter email</label><br />
                    <input type="email" id="email" value={email} onChange={handleEmailChange} placeholder="Enter email"/>
                </div>
                <div className="firstname">
                    <label htmlFor="firstName">Enter Firstame</label><br />
                    <input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} placeholder="Enter firstname"/>
                </div>
                <div className="lastname">
                    <label htmlFor="lastName">Enter Lastname</label><br />
                    <input type="text" id="lastName" value={lastName} onChange={handleLastNameChange} placeholder="Enter lastname"/>
                </div>
                <div className="password">
                    <label htmlFor="password">Create Password</label><br />
                    <input type="password" id="password" value={password} onChange={handlePasswordChange} placeholder="Enter password"/>
                </div>
                <div>
                    <button className="registration-btn" onClick={(e) => handleSignUp(e, email, password)}>Sign Up</button>
                </div>
            </form>
        </div>
        </div>
    </div>
  )
}
