import BotsSection from './BotsSection';
import EmailCardBottom from './EmailCardBottom';
import EmailCardTop from './EmailCardTop';
import Hero from './Hero';
import MessageCard from './MessageCard';
import PublisherSection from './PublisherSection';
import TradableSection from './TradableSection';

const Creators = () => {
    const changeBackgroundColor = () => {
        const coloredSections = document.querySelectorAll('.colored-section') as NodeListOf<HTMLElement>;
        coloredSections.forEach((section) => {
            if (section.getBoundingClientRect().top <= window.innerHeight) {
                document.body.style.backgroundColor = section.dataset.color as string;
            }
        });
    };

    window.addEventListener('load', () => {
        changeBackgroundColor();
        window.addEventListener('scroll', changeBackgroundColor);
        window.addEventListener('touchmove', changeBackgroundColor);
    });

    window.addEventListener('beforeunload', () => {
        window.removeEventListener('scroll', changeBackgroundColor);
    });
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
