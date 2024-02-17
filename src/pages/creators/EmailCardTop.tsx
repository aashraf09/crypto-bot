import { Button, Card, Container, Header, Image, Input } from 'semantic-ui-react';
import { ThemeContext } from '../../utils/themeContext';
import rightImage from '../../assets/images/computer-ss.png';
import bottomImg from '../../assets/images/computer-tablet-img.png';
import useScreenSize from '../../hooks/useScreenSize';
import { useContext } from 'react';

const EmailCardTop = () => {
    const { screenSize, orientation } = useScreenSize();
    const { theme } = useContext(ThemeContext);
    const responsiveImage =
        screenSize === 'desktop' || (screenSize === 'tablet' && orientation === 'landscape') ? rightImage : bottomImg;

    return (
        <Container className={`email-card-top email-card-top-${theme}`}>
            <Card>
                <div>
                    <Header as="h1">
                        Taking <br /> <span className="blue"> 100 Beta Testers </span>
                    </Header>
                    <p>Register For Exclusive Trader Perks!</p>
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
                <div className="right-img">
                    <Image src={responsiveImage} />
                </div>
            </Card>
        </Container>
    );
};

export default EmailCardTop;
