import './BankAccountCard.css'

function BankAccountCard({ accountTitle, accountAmount, accountAmountDescription }) {
    return (
        <section class="account">
            <div class="account-content-wrapper">
                <h3 class="account-title">{accountTitle}</h3>
                <p class="account-amount">{accountAmount}</p>
                <p class="account-amount-description">{accountAmountDescription}</p>
            </div>
            <div class="account-content-wrapper cta">
                <button class="transaction-button">View transactions</button>
            </div>
        </section>
    )
}

export default BankAccountCard;