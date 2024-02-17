import { Button, Card, Container, Header, Image, Input } from 'semantic-ui-react';
import { ThemeContext } from '../../utils/themeContext';
import leftImage from '../../assets/images/bot.png';
import rightImage from '../../assets/images/phone-ss.png';
import bottomImage from '../../assets/images/iphone-straight-profit.png';
// import { useContext } from 'react';
import useScreenSize from '../../hooks/useScreenSize';
import { useContext } from 'react';

const EmailCardBottom = () => {
    const { screenSize, orientation } = useScreenSize();
    const { theme } = useContext(ThemeContext);
    return (
        <Container className={`email-card-btm email-card-btm-${theme}`}>
            <Card>
                <div>
                    <Header as="h1">
                        First-mover <span className="blue"> Advantage </span>
                    </Header>
                    <p>Get in early, list your bot, and ensure it stands out when we unleash our marketing force!</p>
                </div>

                <div className="input">
                    <Input placeholder="Enter Your Email" />
                    <Button> Join Beta </Button>
                </div>

                <div className="stat">
                    <Header as="h2">363</Header>
                    <Header as="h1">
                        Users <br /> Waitlisted
                    </Header>
                </div>

                <div className="img-bot">
                    <Image src={leftImage} />
                </div>

                <div className="right-img">
                    {screenSize === 'mobile' ? <Image src={bottomImage} /> : <Image src={rightImage} />}
                </div>
            </Card>
        </Container>
    );
};

export default EmailCardBottom;
