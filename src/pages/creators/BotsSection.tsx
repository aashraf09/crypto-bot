import {
    Card,
    Container,
    Grid,
    GridColumn,
    GridRow,
    Header,
    Image,
    List,
    ListContent,
    ListIcon,
    ListItem,
} from 'semantic-ui-react';

import useScreenSize from '../../hooks/useScreenSize';
import phone1 from '../../assets/images/phone-straight.png';
import phone2 from '../../assets/images/iphone.png';
import phone3 from '../../assets/images/phone-balance.png';
import phone4 from '../../assets/images/iphone-centered.png';

const BotsSection = () => {
    const { screenSize, orientation } = useScreenSize();
    return (
        <Container className="bots-section colored-section" data-color="#fff">
            <div className="topbar">
                <Card>
                    <Header as="h1">
                        Craft Bots,
                        <br />
                        <span> Not Code</span>
                    </Header>
                </Card>
            </div>
            <Grid className="level-1">
                <GridRow>
                    <GridColumn>
                        <div className="info">
                            <Header as="h1">
                                Convert <br />
                                Your Strategy <br />
                                Into a Bot
                            </Header>
                            <List>
                                <ListItem>
                                    <ListIcon name="check" />
                                    <ListContent>
                                        No-code <span> hassle-free bot creation </span>
                                    </ListContent>
                                </ListItem>
                                <ListItem>
                                    <ListIcon name="check" />
                                    <ListContent>
                                        Over 100 <span> indicators & chart patterns </span>
                                    </ListContent>
                                </ListItem>
                                <ListItem>
                                    <ListIcon name="check" />
                                    <ListContent>
                                        Analyse & build <span> across multiple-timeframes </span>
                                    </ListContent>
                                </ListItem>
                                <ListItem>
                                    <ListIcon name="check" />
                                    <ListContent>
                                        Integration prioritisation. <span> Request your specific needs! </span>
                                    </ListContent>
                                </ListItem>
                            </List>
                            <p>
                                Want to learn more about what's in it for you if you publish your system?Check out this
                                article in our Blog section.
                            </p>
                        </div>
                        {(screenSize === 'desktop' || (screenSize === 'tablet' && orientation === 'landscape')) && (
                            <Image src={phone1} className="img" />
                        )}
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <div className="info">
                            <Header as="h1">
                                Rent
                                <br />
                                and Earn
                            </Header>
                            <List>
                                <ListItem>
                                    <ListIcon name="check" />
                                    <ListContent>
                                        Determine <span> the flat fee + earn 0.1% of the users capital </span>
                                    </ListContent>
                                </ListItem>
                                <ListItem>
                                    <ListIcon name="check" />
                                    <ListContent>
                                        Reach <span> subscribers at launch with early access </span>
                                    </ListContent>
                                </ListItem>
                                <ListItem>
                                    <ListIcon name="check" />
                                    <ListContent>
                                        Frictionless <span> for subscribers. Subscribe - Allocated - Automate </span>
                                    </ListContent>
                                </ListItem>
                                <ListItem>
                                    <ListIcon name="check" />
                                    <ListContent>
                                        Protection <span> of your strategy through encryption </span>
                                    </ListContent>
                                </ListItem>
                            </List>
                        </div>
                        {screenSize === 'desktop' || (screenSize === 'tablet' && orientation === 'landscape') ? (
                            <Image src={phone2} className="img" />
                        ) : (
                            <Image src={phone4} className="img" />
                        )}
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <div className="info">
                            <Header as="h1">
                                Your Trading
                                <br />
                                Cockpit
                            </Header>
                            <p>All-in-one crypto trading.</p>
                            <List>
                                <ListItem>
                                    <ListIcon name="check" />
                                    <ListContent>
                                        Connect <span> your exchange for full trading features </span>
                                    </ListContent>
                                </ListItem>
                                <ListItem>
                                    <ListIcon name="check" />
                                    <ListContent>
                                        Trade <span> however you'd like. Automation or manually with alerts </span>
                                    </ListContent>
                                </ListItem>
                                <ListItem>
                                    <ListIcon name="check" />
                                    <ListContent>
                                        Portfolio <span> aggregation for your exchanges and crypto wallets </span>
                                    </ListContent>
                                </ListItem>
                                <ListItem>
                                    <ListIcon name="check" />
                                    <ListContent>
                                        Non-custodial <span> so your funds remain on your exchanges </span>
                                    </ListContent>
                                </ListItem>
                                <ListItem>
                                    <ListIcon name="check" />
                                    <ListContent>
                                        Affiliate Program <span> to share with your network and earn </span>
                                    </ListContent>
                                </ListItem>
                            </List>
                        </div>
                        {(screenSize === 'desktop' || (screenSize === 'tablet' && orientation === 'landscape')) && (
                            <Image src={phone3} className="img" />
                        )}
                    </GridColumn>
                </GridRow>
            </Grid>
        </Container>
    );
};

export default BotsSection;
