import './Header.css'
import argentBankLogo from '../../pages/Home/argentBankLogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../../redux/actions/auth.action';
import { useNavigate } from 'react-router-dom';

function Header() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const firstName = useSelector((state) => state.user.firstName) // Permet de mettre à jour le nom automatiquement grâce au store
    const token = useSelector((state) => state.auth.token)

    const logout = () => {
        if (token) {
            dispatch(logoutAction())
            navigate("/")
        }
    }

    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="/">
                <img
                    className="main-nav-logo-image"
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div className='user-info'>
                <span>{token ? firstName : ""}</span>
                <a className="main-nav-item" href={token ? "#" : "/login"} onClick={logout}>
                    <i className="fa fa-user-circle"></i>
                    {token ? "Sign Out" : "Sign In"}
                </a>
            </div>
        </nav>
    )
}

export default Header;