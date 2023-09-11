import BankAccountCard from '../../components/BankAccountCard/BankAccountCard';
import HeaderUser from '../../components/HeaderUser/HeaderUser'
import './Profil.css';

function Profil() {
    return (
        <main className="main bg-dark">
            <HeaderUser firstname="Maxime" lastName="Cat" />
            <h2 class="sr-only">Accounts</h2>
            <BankAccountCard accountTitle="Argent Bank Checking (x8349)" accountAmount="$2,082.79" accountAmountDescription="Available Balance" />
            <BankAccountCard accountTitle="Argent Bank Savings (x6712)" accountAmount="$10,928.42" accountAmountDescription="Available Balance" />
            <BankAccountCard accountTitle="Argent Bank Credit Card (x8349)" accountAmount="$184.30" accountAmountDescription="Current Balance" />
        </main>
    );
}

export default Profil;