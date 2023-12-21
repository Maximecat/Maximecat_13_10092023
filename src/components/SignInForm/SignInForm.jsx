import './SignInForm.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../redux/actions/auth.action';

function SignInForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const errorMessage = useSelector((state) => state.auth.errorMessage) // Ecoute le message d'erreur du store
    const token = useSelector((state) => state.auth.token) // Ecoute le token du store

    // Depend de la modification du token
    useEffect(() => {
        if (token) {
            navigate("/profil")
        }
    }, [token, navigate])

    const submit = (e) => {
        e.preventDefault()
        dispatch(loginAction({ email, password, rememberMe })) // dispatch l'action de login avec les informations du formulaire
    }

    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <p>{errorMessage}</p>
            <form onSubmit={submit}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" value={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="sign-in-button" type="submit" name="Login">
                    Sign In
                </button>
            </form>
        </section>
    )
}

export default SignInForm;