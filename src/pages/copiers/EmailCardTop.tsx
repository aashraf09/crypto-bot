import { Button, Card, Container, Header, Image, Input } from 'semantic-ui-react';
import { ThemeContext } from '../../utils/themeContext';
import { useContext } from 'react';
import rightImage from '../../assets/images/img-phone.png';

const EmailCardTop = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <Container className={`email-card-top email-card-top-${theme} copiers`}>
            <Card>
                <div>
                    <Header as="h1">
                        <span className="blue"> Waitlist </span>
                        <br /> For Early Access
                    </Header>
                    <p>Be Among the First to Know When We Launch!</p>
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
                <div className="img-phone">
                    <Image src={rightImage} />
                </div>
            </Card>
        </Container>
    );
};

export default EmailCardTop;
