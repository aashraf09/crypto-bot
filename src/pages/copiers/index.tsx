import EmailCardBottom from './EmailCardBottom';
import EmailCardTop from './EmailCardTop';
import Hero from './Hero';
import MessageCard from './MessageCard';
import ProfitSection from './ProfitSection';
import TradableSection from './TradableSection';
import TradingSection from './TradingSection';

const Copiers = () => {
    return (
        <div>
            <Hero />
            <EmailCardTop />
            <ProfitSection />
            <TradingSection />
            <TradableSection />
            <MessageCard />
            <EmailCardBottom />
        </div>
    );
};

export default Copiers;
