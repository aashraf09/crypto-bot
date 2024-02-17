import React, { ReactNode, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ThemeContext } from '../../utils/themeContext';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <Navbar />
            {children}
            <Footer />
        </ThemeContext.Provider>
    );
};

export default Layout;
