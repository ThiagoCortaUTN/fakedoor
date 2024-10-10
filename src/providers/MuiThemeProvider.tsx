'use client';

import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';
import { Plus_Jakarta_Sans } from 'next/font/google';
import React from 'react';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: plusJakartaSans.style.fontFamily,
    },
  },
  palette: {
    primary: {
      main: 'rgb(36, 59, 199)',
    },
    secondary: {
      main: '#6AF6D7',
    },
  },
});

interface CustomThemeProviderProps {
  children: React.ReactNode;
}

export default function MuiThemeProvider({
  children,
}: CustomThemeProviderProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
}
