import { useEffect, useState } from "react"
import { loadUsers, signup } from "./../store/user.actions.js"
import { useNavigate } from "react-router"
export function SignupForm() {
    const [signupEmail, setSignupEmail] = useState("")
    const [signupFullName, setSignupFullName] = useState("")
    const [signupPassword, setSignupPassword] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        loadUsers()
    }, [])


    async function onSignup(email, fullName, password) {
        signup(email, fullName, password)
        navigate("/")
    }

    return <div>
        <h1>sign up</h1>
        <form className="signup-form" onSubmit={(ev) => {
            ev.preventDefault()
            setSignupEmail("")
            setSignupFullName("")
            setSignupPassword("")
            onSignup(signupEmail, signupFullName, signupPassword)
        }} >
            <input className="signup-email" type="text"
                placeholder="Email"
                value={signupEmail}
                onInput={(ev) => setSignupEmail(ev.target.value)}
            />
            <input className="signup-fullname" type="text"
                placeholder="Full name"
                value={signupFullName}
                onInput={(ev) => setSignupFullName(ev.target.value)}
            />
            <input
                className="signup-password"
                type="password"
                placeholder="password"
                value={signupPassword}
                onInput={(ev) => setSignupPassword(ev.target.value)}
            />

            <button>
                Sign up
            </button>

        </form>
    </div>
}
