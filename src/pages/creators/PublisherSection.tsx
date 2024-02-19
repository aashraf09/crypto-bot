import { Card, Container, Grid, GridColumn, GridRow, Header, Image } from 'semantic-ui-react';

import bot from '../../assets/images/bot-stand.png';
import man from '../../assets/images/man-with-money.png';
import badge from '../../assets/images/circle-checked.png';
import globe from '../../assets/images/globe.png';

const PublisherSection = () => {
    return (
        <Container className="publisher-section colored-section">
            <div className="topbar">
                <Card>
                    <Header as="h1">
                        The Publisher <br />
                        <span> Edge</span>
                    </Header>
                </Card>
            </div>
            <Grid className="level-1">
                <GridRow>
                    <GridColumn>
                        <Image src={bot} />
                        <Header as="h1">Elevate Reach</Header>
                        <p>
                            Tap into thousands of potential subscribers. Marketing is on us, ensuring a consistent
                            influx of crypto investors ready for a bot like yours.
                        </p>
                    </GridColumn>
                    <GridColumn>
                        <Image src={man} />
                        <Header as="h1">Consistent Returns</Header>
                        <p>
                            With subscriptions, experience steady and predictable earnings compared to the uncertainties
                            and fluctuations inherent in trading.
                        </p>
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <div className="info">
                            <Image src={badge} className="badge" />
                            <div>
                                <Header as="h1">Tick of Approval</Header>
                                <p>
                                    Having your system on Tradable is a stamp of quality, elevating your reputation and
                                    trustworthiness in the crypto community!
                                </p>
                            </div>
                        </div>
                        <Image src={globe} className="globe" />
                    </GridColumn>
                </GridRow>
            </Grid>
        </Container>
    );
};

export default PublisherSection;
