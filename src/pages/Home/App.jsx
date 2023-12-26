import './App.css';
import iconChat from './icon-chat.png';
import iconMoney from './icon-money.png';
import iconSecurity from './icon-security.png';
import HomeInfo from '../../components/HomeInfo/HomeInfo';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function App() {

    return (
        <div className="App">
            <Header />
            <HeroHeader />
            <section className="features">
                <h2 className="sr-only">Features</h2>
                <HomeInfo image={iconChat} title="You are our #1 priority" description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes." alt="Chat Icon" />
                <HomeInfo image={iconMoney} title="More savings means higher rates" description="The more you save with us, the higher your interest rate will be!" alt="Bill Icon" />
                <HomeInfo image={iconSecurity} title="Security you can trust" description="We use top of the line encryption to make sure your data and money is always safe." alt="Shield Icon" />
            </section>
            <Footer />
        </div>
    );
}

export default App;
