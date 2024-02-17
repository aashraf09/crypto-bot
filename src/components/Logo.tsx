import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';

import logo from '../assets/images/Logo.svg';
import logoText from '../assets/images/Logo-Text.svg';
import PathConstants from '../routes/pathConstants';
import useScreenSize from '../hooks/useScreenSize';

const Logo = () => {
    const { screenSize, orientation } = useScreenSize();

    return (
        <Link className="nav-logo" to={PathConstants.CREATORS}>
            <Image src={logo} alt="logo" />
            {(screenSize === 'desktop' || (screenSize === 'tablet' && orientation === 'landscape')) && (
                <Image src={logoText} alt="logo-text" />
            )}
        </Link>
    );
};

export default Logo;
