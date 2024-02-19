import { Container, Grid, GridColumn, GridRow, Header, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../utils/themeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../Logo';
import PathConstants from '../../routes/pathConstants';
import { faSquareFacebook, faSquareXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useContext } from 'react';

const Footer = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <Container className={`footer footer-${theme}`}>
            <Grid>
                <GridRow columns={4}>
                    <GridColumn>
                        <Logo />
                        <Header as="h1">
                            Trade Effortlessly <br />
                            Simplify Life
                        </Header>
                    </GridColumn>
                    <GridColumn>
                        <Header as={Link} to={PathConstants.CREATORS}>
                            About Us
                        </Header>
                        <Header as={Link} to={PathConstants.CREATORS}>
                            Blog
                        </Header>
                        <Header as={Link} to={PathConstants.CREATORS}>
                            FAQ
                        </Header>
                        <Header as={Link} to={PathConstants.CREATORS}>
                            Media Kit
                        </Header>
                    </GridColumn>
                    <GridColumn>
                        <Header as={Link} to={PathConstants.CREATORS}>
                            Support
                        </Header>
                        <Header as={Link} to={PathConstants.CREATORS}>
                            T&Cs
                        </Header>
                        <Header as={Link} to={PathConstants.CREATORS}>
                            Privacy Policy
                        </Header>
                        <Header as={Link} to={PathConstants.CREATORS}>
                            Disclaimer
                        </Header>
                    </GridColumn>
                    <GridColumn>
                        <Link to={'/'}>
                            <FontAwesomeIcon icon={faSquareFacebook} size="2xl" />
                        </Link>
                        <Link to={'/'}>
                            <FontAwesomeIcon icon={faSquareXTwitter} size="2xl" />
                        </Link>
                        <Link to={'/'}>
                            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                        </Link>
                    </GridColumn>
                </GridRow>
            </Grid>
        </Container>
    );
};

export default Footer;
