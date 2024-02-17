import { Card, Container, Header, Image, List, ListContent, ListIcon, ListItem } from 'semantic-ui-react';
import { ThemeContext } from '../../utils/themeContext';
import { useContext } from 'react';
import hand from '../../assets/images/hand-with-plant.svg';
import topImg from '../../assets/images/bot-inverted.png';
import midImg from '../../assets/images/standing-man.png';
import bottomImg from '../../assets/images/money.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const MessageCard = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <Container className={`message-card  message-card-${theme}`}>
            <Card>
                <div className="circular-img">
                    <Image src={hand} />
                </div>
                <div className="msg-box">
                    <Header as="h1">Elevate Your Expertise</Header>
                    <p>
                        Our platform aims to bring your expertise to the forefront, allowing others to benefit, and in
                        turn reward you.
                    </p>
                    <List>
                        <ListItem>
                            <ListIcon name="heart outline" />
                            <ListContent>Showcase your prowess</ListContent>
                        </ListItem>
                        <ListItem>
                            <ListIcon name="heart outline" />
                            <ListContent>Amplify your expertise</ListContent>
                        </ListItem>
                        <ListItem>
                            <ListIcon name="heart outline" />
                            <ListContent>Earn from your craft</ListContent>
                        </ListItem>
                    </List>
                </div>

                <div className="top-img">
                    <Image src={topImg} />
                </div>
                <div className="mid-img">
                    <Image src={midImg} />
                </div>
                <div className="bottom-img">
                    <Image src={bottomImg} />
                </div>
            </Card>
        </Container>
    );
};

export default MessageCard;
