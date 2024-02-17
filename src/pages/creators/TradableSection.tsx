import { Card, Container, Grid, GridColumn, GridRow, Header, Image } from 'semantic-ui-react';
import { ThemeContext } from '../../utils/themeContext';
import React, { useContext } from 'react';
import woman from '../../assets/images/woman-with-phone.png';
import circularBot from '../../assets/images/circular-bot.png';
import dotGraph from '../../assets/images/graph-dot.png';
import lineGraph from '../../assets/images/graph-line.png';
import useScreenSize from '../../hooks/useScreenSize';

const TradableSection = () => {
    const { screenSize, orientation } = useScreenSize();
    const { theme } = useContext(ThemeContext);
    return (
        <Container className={`tradable-section tradable-section-${theme}`}>
            <div className="topbar">
                <Card>
                    {screenSize === 'desktop' || (screenSize === 'tablet' && orientation === 'landscape') ? (
                        <Header as="h1">
                            The Tradable Platform <br />
                            <span> Edge</span>
                        </Header>
                    ) : screenSize === 'tablet' || (screenSize === 'mobile' && orientation === 'landscape') ? (
                        <Header as="h1">
                            The Tradable <br />
                            <span>Platform Edge</span>
                        </Header>
                    ) : (
                        <Header as="h1">
                            The <br /> Tradable <br />
                            <span>Platform Edge</span>
                        </Header>
                    )}
                </Card>
            </div>
            <Grid className="level-1">
                <GridRow>
                    <GridColumn>
                        <Image src={woman} />
                        <Header as="h1">Beginner Friendly Automation</Header>
                        <p>
                            Crafted for beginners, perfected for experts. With Tradable, even crypto newbies can
                            effortlessly subscribe and start automating!
                        </p>
                    </GridColumn>
                    <GridColumn>
                        <Image src={circularBot} />
                        <Header as="h1">Superior Bot Builder</Header>
                        <p>
                            No-code builder surpasses simple DCA or GRID options. Craft sophisticated bots, turning
                            strategies into actionable, automated systems.
                        </p>
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <Image src={dotGraph} />
                        <Header as="h1">Precision Tools</Header>
                        <p>
                            Combat over-optimization with in-built curve fitting tools, including Monte Carlo analysis
                            and out-of-sample testing, ensuring robustness and reliability.
                        </p>
                    </GridColumn>
                    <GridColumn>
                        <Image src={lineGraph} />
                        <Header as="h1">All-in-one Trading</Header>
                        <p>
                            A true all-rounder: from backtesting to automation, manual trading, and portfolio
                            aggregation. Tailored to cater to both automated enthusiasts and manual traders.
                        </p>
                    </GridColumn>
                </GridRow>
            </Grid>
        </Container>
    );
};

export default TradableSection;
