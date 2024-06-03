import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { purpleTheme } from './purpleTheme';

export const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme={purpleTheme}>
            {/** Codigo base para vsualizar material UI igualen todos los navegadores*/}
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
