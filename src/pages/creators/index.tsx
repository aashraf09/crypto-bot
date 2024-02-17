import BotsSection from './BotsSection';
import EmailCardBottom from './EmailCardBottom';
import EmailCardTop from './EmailCardTop';
import Hero from './Hero';
import MessageCard from './MessageCard';
import PublisherSection from './PublisherSection';
import TradableSection from './TradableSection';

const Creators = () => {
    return (
        <div>
            <Hero />
            <EmailCardTop />
            <BotsSection />
            <PublisherSection />
            <TradableSection />
            <MessageCard />
            <EmailCardBottom />
        </div>
    );
};

export default Creators;
