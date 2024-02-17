import { Button, Container, Image, Menu, MenuItem } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useContext } from 'react';
import PathConstants from '../../routes/pathConstants';
import Switch from '../ui/Switch';
import useScreenSize from '../../hooks/useScreenSize';
import MobileNavbar from './MobileNavbar';
import { ThemeContext } from '../../utils/themeContext';
import Logo from '../Logo';
import closeIcon from '../../assets/images/close-icon.svg';
import menuIcon from '../../assets/images/menu.svg';

const Navbar = () => {
    const location = useLocation();
    const { screenSize, orientation } = useScreenSize();
    const [navMobileOpen, setNavMobileOpen] = useState(false);
    const { theme } = useContext(ThemeContext);
    const navLinks = [
        { name: 'Creators', to: PathConstants.CREATORS },
        { name: 'Copiers', to: PathConstants.COPIERS },
        { name: 'Live Chart', to: PathConstants.CREATORS },
        { name: 'Marketplace', to: PathConstants.CREATORS },
        { name: 'Pricing', to: PathConstants.CREATORS },
        { name: 'Content Hub', to: PathConstants.CREATORS },
        { name: 'Documentation', to: PathConstants.CREATORS },
        { name: 'Login', to: PathConstants.CREATORS },
    ];

    return (
        <Container className={`nav bg-${theme}`}>
            <Menu className={`nav nav-${theme}`}>
                <MenuItem name="Logo">
                    <Logo />
                </MenuItem>
                {screenSize === 'desktop' && (
                    <>
                        {navLinks.slice(0, -1).map((link, index) => (
                            <MenuItem
                                key={index}
                                as={Link}
                                to={link.to}
                                name={link.name}
                                active={index <= 1 ? location.pathname === link.to : false}>
                                {link.name}
                            </MenuItem>
                        ))}
                        <MenuItem>
                            <Switch />
                        </MenuItem>
                        <MenuItem position="right">
                            <Button className="login">Login</Button>
                        </MenuItem>
                    </>
                )}
                {(screenSize === 'mobile' || screenSize === 'tablet') && (
                    <MenuItem
                        onClick={() => {
                            setNavMobileOpen(!navMobileOpen);
                        }}
                        style={{
                            transition: `color 0.15s ease 0.5s`,
                        }}
                        position="right">
                        {navMobileOpen ? (
                            <Image src={closeIcon} className="icon" />
                        ) : (
                            <Image src={menuIcon} className="icon" />
                        )}
                    </MenuItem>
                )}
                <MobileNavbar navLinks={navLinks} open={navMobileOpen} setOpen={(open) => setNavMobileOpen(open)} />
            </Menu>
        </Container>
    );
};

export default Navbar;
