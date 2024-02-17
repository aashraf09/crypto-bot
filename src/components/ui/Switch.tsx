import React from 'react';
import '../../assets/less/switch.css';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/themeContext';

const Switch = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    return (
        <div className="container">
            <div className="daynight">
                <label htmlFor="checkbox">
                    <input type="checkbox" name="" id="checkbox" onClick={toggleTheme} />
                    <div className="toggle">
                        <div className="star1"></div>
                        <div className="star2"></div>
                    </div>
                </label>
            </div>
        </div>
    );
};

export default Switch;
