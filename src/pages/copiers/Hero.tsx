import { Button, Container, Header, Image } from 'semantic-ui-react';
import { ThemeContext } from '../../utils/themeContext';
import heroImg from '../../assets/images/hero-img.png';
import useScreenSize from '../../hooks/useScreenSize';
import { useContext } from 'react';

const Hero = () => {
    const { screenSize, orientation } = useScreenSize();
    const { theme } = useContext(ThemeContext);
    return (
        <Container className={`hero hero-${theme}`}>
            {screenSize === 'desktop' || (screenSize === 'tablet' && orientation === 'landscape') ? (
                <>
                    <Header as="h1" className={`grand-title grand-title-${theme}`}>
                        Trade Crypto Like A Pro Through Automation
                    </Header>
                    <p>
                        The marketplace for crypto trading bots crafted by the community to help you unleash your
                        potential.
                    </p>
                    <Button>Join Us</Button>
                    <div className="stat">
                        <Header as="h2">Total Trading Value Handled by Our Bots</Header>
                        <Header as="h1">$650,000</Header>
                    </div>
                </>
            ) : screenSize === 'tablet' || (screenSize === 'mobile' && orientation === 'landscape') ? (
                <>
                    <Header as="h1" className="grand-title">
                        Trade Crypto Like A Pro Through Automation
                    </Header>
                    <p>
                        The marketplace for crypto trading bots crafted by the community to help you unleash your
                        potential.
                    </p>
                    <Button>Join Us</Button>
                    <div className="stat">
                        <Header as="h2">Total Trading Value Handled by Our Bots</Header>
                        <Header as="h1">$650,000</Header>
                    </div>
                </>
            ) : (
                <>
                    <Header as="h1" className="grand-title">
                        Build Your Crypto Bot & Market It At Scale
                    </Header>
                    <p>
                        The no-code builder that supports complex strategies. Build, test, automate and share with the
                        community.
                    </p>
                    <Button>Join Us</Button>
                    <div className="mobileStat">
                        <Header as="h1">
                            Create a bot and tap into the <span> 950 wait-listed users </span> who eager to
                            <span> copy your trading bot! </span>
                        </Header>
                    </div>
                </>
            )}

            <div className="img-box">
                <Image src={heroImg} />
            </div>
        </Container>
    );
};

export default Hero;
