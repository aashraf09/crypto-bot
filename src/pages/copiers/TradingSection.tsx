import { Card, Container, Grid, GridColumn, GridRow, Header, Image } from 'semantic-ui-react';

import automated from '../../assets/images/automated.png';
import reliable from '../../assets/images/reliable.png';
import badge from '../../assets/images/circular-avatar.png';
import smile from '../../assets/images/smile.png';
import rightImg from '../../assets/images/hand-with-money.png';

const TradingSection = () => {
    return (
        <Container className="trading-section">
            <div className="topbar">
                <Card>
                    <Header as="h1">
                        The Trading System <br />
                        <span> Edge</span>
                    </Header>
                </Card>
            </div>
            <Grid className="level-1">
                <GridRow>
                    <GridColumn>
                        <Image src={automated} />
                        <Header as="h1">Automated</Header>
                        <p>
                            Trade non-stop with fully automated systems, never miss a trade, and gain more leisure time.
                        </p>
                    </GridColumn>
                    <GridColumn>
                        <Image src={reliable} />
                        <Header as="h1">Reliable</Header>
                        <p>Algorithms function like clockwork, ensuring consistent trade executions every time.</p>
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <div className="info">
                            <Image src={badge} />
                            <div>
                                <Header as="h1">Emotionless</Header>
                                <p>
                                    Cut out emotional errors and reduce market-monitoring stress. Almost as good as a
                                    stress-free experience!
                                </p>
                            </div>
                        </div>
                        <Image src={smile} className="smile" />
                        <Image src={rightImg} className="rightImg" />
                    </GridColumn>
                </GridRow>
            </Grid>
        </Container>
    );
};

export default TradingSection;
