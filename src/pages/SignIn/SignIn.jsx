import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import SignInForm from '../../components/SignInForm/SignInForm';
import './SignIn.css';

function SignIn() {
    return (
        <>
            <Header />
            <main className="main bg-dark">
                <SignInForm />
            </main>
            <Footer />
        </>
    );
}

export default SignIn;