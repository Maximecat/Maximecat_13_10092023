import BankAccountCard from '../../components/BankAccountCard/BankAccountCard';
import HeaderUser from '../../components/HeaderUser/HeaderUser'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Profil.css';
import { useEffect, useState } from 'react';
import { getUser } from '../../utils/services/ApiService';

function Profil() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    useEffect(() => {
        getUser(window.sessionStorage.getItem("token") || window.localStorage.getItem("token"))
            .then(res => {
                console.log(res);
                setFirstName(res.body.firstName)
                setLastName(res.body.lastName)
            })
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