import React, { createContext, Dispatch, SetStateAction } from 'react';

interface IThemeContext {
    theme: 'light' | 'dark';
    setTheme: Dispatch<SetStateAction<'light' | 'dark'>>;
}

export const ThemeContext = createContext<IThemeContext>({
    theme: 'dark',
    setTheme: (prevTheme) => {
        prevTheme === 'dark' ? 'light' : 'dark';
    },
});
