// import { loginAction } from '../../redux/actions/auth.action';
import { useState } from 'react';
import { login } from '../../utils/services/ApiService';
import { useNavigate } from 'react-router-dom';
import './SignInForm.css'

function SignInForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate()

    const submit = (e) => {
        /* ici il faudra dispatch l'action de login */
        e.preventDefault()
        console.log(email, password);
        login(email, password)
            .then(res => {
                if (res.status === 200) {
                    setErrorMessage("")
                    if (rememberMe === true) {
                        window.localStorage.setItem("token", res.body.token)
                    } else {
                        window.sessionStorage.setItem("token", res.body.token)
                    }
                    navigate("/profil")
                } else if (res.status === 400) {
                    setErrorMessage(res.message)
                }
            })
    }

    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <p>{errorMessage}</p>
            <form onSubmit={submit}>
                <div className="input-wrapper">
                    <label for="username">Username</label>
                    <input type="text" id="username" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-wrapper">
                    <label for="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" value={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                    <label for="remember-me">Remember me</label>
                </div>
                <button className="sign-in-button" type="submit" name="Login">
                    Sign In
                </button>
            </form>
        </section>
    )
}

export default SignInForm;