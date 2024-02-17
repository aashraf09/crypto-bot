import { Card, Container, Grid, GridColumn, GridRow, Header, Image } from 'semantic-ui-react';

import img1 from '../../assets/images/bot-comment.png';
import img2 from '../../assets/images/man-laptop.png';
import img3 from '../../assets/images/mail.png';
import img4 from '../../assets/images/stat.png';

const TradableSection = () => {
    return (
        <Container className="tradable-section copiers">
            <div className="topbar">
                <Card>
                    <Header as="h1">
                        The Tradable Platform <br />
                        <span> Edge</span>
                    </Header>
                </Card>
            </div>
            <Grid className="level-1">
                <GridRow>
                    <GridColumn>
                        <Image src={img1} />
                        <Header as="h1">Open Marketplace</Header>
                        <p>
                            Explore a wide array of trading bots created by the community and utilise advanced reports
                            for informed decision making.
                        </p>
                    </GridColumn>
                    <GridColumn>
                        <Image src={img2} />
                        <Header as="h1">Quality & Complexity</Header>
                        <p>
                            Move beyond typical DCA and Grid bots. No-code builder empowers traders to deploy complex
                            strategies effortlessly for maximum advantage.
                        </p>
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <Image src={img3} />
                        <Header as="h1">Vetting</Header>
                        <p>
                            Bots must pass Tradable's criteria to enter and remain within the marketplace. Receive
                            alerts if your bots are underperforming.
                        </p>
                    </GridColumn>
                    <GridColumn>
                        <Image src={img4} />
                        <Header as="h1">Transparent</Header>
                        <p>
                            Unlike competitors, our bots are benchmarked against BTC/USD, ensuring genuine, fair
                            performance comparisons.
                        </p>
                    </GridColumn>
                </GridRow>
            </Grid>
        </Container>
    );
};

export default TradableSection;
