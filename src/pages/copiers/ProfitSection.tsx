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

import phone1 from '../../assets/images/phone-marketplace.png';
import phone2 from '../../assets/images/phone-balance-r.png';
import phone3 from '../../assets/images/iphone-straight-profit.png';

import useScreenSize from '../../hooks/useScreenSize';

const ProfitSection = () => {
    const { screenSize, orientation } = useScreenSize();

    return (
        <Container className="profit-section">
            <div className="topbar">
                <Card>
                    <Header as="h1">
                        Profit
                        <br />
                        <span> While You Sleep</span>
                    </Header>
                    {screenSize === 'desktop' || (screenSize === 'tablet' && orientation === 'landscape') ? (
                        <>
                            <p>
                                The crypto market is churning 24/7! <br /> Take advantage of trading bots created by the
                                community and vetted by us.
                            </p>
                        </>
                    ) : (
                        <>
                            <p>
                                The crypto market is churning 24/7! <br /> Take advantage of trading bots created by the
                                community and vetted by us.
                            </p>
                        </>
                    )}
                </Card>
            </div>
            <Grid className="level-1">
                <GridRow>
                    <GridColumn>
                        <div className="info">
                            <Header as="h1">
                                Subscribe
                                <br />& Automate
                            </Header>
                            <Header as="h5">It’s really that simple!</Header>

                            <List>
                                <ListItem>
                                    <ListIcon name="check" />
                                    <ListContent>
                                        Plug <span> into your preferred exchange (your funds remain there) </span>
                                    </ListContent>
                                </ListItem>
                                <ListItem>
                                    <ListIcon name="check" />
                                    <ListContent>
                                        Choose <span> your bot with the aid of transparent performance metrics </span>
                                    </ListContent>
                                </ListItem>
                                <ListItem>
                                    <ListIcon name="check" />
                                    <ListContent>
                                        Select <span> the crypto asset you’d like to trade + an amount </span>
                                    </ListContent>
                                </ListItem>
                                <ListItem>
                                    <ListIcon name="check" />
                                    <ListContent>
                                        Automation Complete!
                                        <span> Your bot will execute orders on your exchange </span>
                                    </ListContent>
                                </ListItem>
                            </List>
                            <p>Interested in creating your own bot? Click here</p>
                        </div>
                        {screenSize === 'desktop' || (screenSize === 'tablet' && orientation === 'landscape') ? (
                            <>
                                <Image src={phone1} className="img" />
                            </>
                        ) : (
                            <>
                                <Image src={phone3} className="img" />
                            </>
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
                            <Header as="h5">All-in-one crypto trading.</Header>
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
                                        Portfolio aggregation <span> for your exchanges and crypto wallets </span>
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
                        <Image src={phone2} className="img" />
                    </GridColumn>
                </GridRow>
            </Grid>
        </Container>
    );
};

export default ProfitSection;
