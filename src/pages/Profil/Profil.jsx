import './Profil.css';
import BankAccountCard from '../../components/BankAccountCard/BankAccountCard';
import HeaderUser from '../../components/HeaderUser/HeaderUser'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAction } from '../../redux/actions/user.action';

function Profil() {
    const dispatch = useDispatch()

    const firstName = useSelector((state) => state.user.firstName)
    const lastName = useSelector((state) => state.user.lastName)
    const token = useSelector((state) => state.auth.token)


    useEffect(() => {
        dispatch(fetchAction({ token }))
    })

    return (
        <>
            <Header />
            <main className="main bg-dark">
                <HeaderUser firstname={firstName} lastname={lastName} />
                <h2 className="sr-only">Accounts</h2>
                <BankAccountCard accountTitle="Argent Bank Checking (x8349)" accountAmount="$2,082.79" accountAmountDescription="Available Balance" />
                <BankAccountCard accountTitle="Argent Bank Savings (x6712)" accountAmount="$10,928.42" accountAmountDescription="Available Balance" />
                <BankAccountCard accountTitle="Argent Bank Credit Card (x8349)" accountAmount="$184.30" accountAmountDescription="Current Balance" />
            </main>
            <Footer />
        </>
    );
}

export default Profil;