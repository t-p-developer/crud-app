import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#3397ff',
      main: '#007dff',
      dark: '#0057b2',
      contrastText: '#ffffff'
    },
    secondary: {
      light: '#00ebac',
      main: '#00d793',
      dark: '#00c579',
      contrastText: '#ffffff'
    },
    error: {
      light: '#f88078',
      main: '#d2190b',
      dark: '#e31b0c',
      contrastText: '#ffffff'
    },
    warning: {
      light: '#ffb547',
      main: '#ff9800',
      dark: '#c77700',
      contrastText: '#000000'
    },
    info: {
      light: '#64b6f7',
      main: '#2196f3',
      dark: '#0b79d0',
      contrastText: '#ffffff'
    },
    success: {
      light: '#7bc67e',
      main: '#4caf50',
      dark: '#3b873e',
      contrastText: '#ffffff'
    },
    grey: {
      50: '#f5fafc',
      100: '#f0f5f9',
      200: '#dde6ed',
      300: '#c0ced9',
      400: '#9eafbc',
      500: '#7b90a0',
      600: '#5a6c7a',
      700: '#405260',
      800: '#2e404e',
      900: '#0d1f2d'
    },
    text: {
      primary: 'rgba(13, 31, 45, 0.9)',
      secondary: 'rgba(13, 31, 45, 0.6)',
      disabled: 'rgba(64, 82, 96, 0.36)'
    }
  },
  typography: {
    fontFamily: "'Helvetica Neue LT W05_65 Medium', 'Open Sans', sans-serif",
    fontWeightLight: 500,
    fontWeightRegular: 500,
    fontWeightMedium: 500,
    fontWeightBold: 500,
    body1: {
      fontFamily: "'Open sans', sans-serif",
      fontWeight: 400
    },
    body2: {
      fontFamily: "'Open sans', sans-serif",
      fontWeight: 400
    },
    button: {
      fontFamily: "'Open sans', sans-serif",
      fontWeight: 600
    },
    caption: {
      fontFamily: "'Open sans', sans-serif",
      fontWeight: 400
    },
    overline: {
      fontFamily: "'Open sans', sans-serif",
      fontWeight: 400
    },
    subtitle1: {
      color: '#7b90a0'
    },
    subtitle2: {
      fontFamily: "'Open sans', sans-serif",
      fontWeight: 700
    }
  }
});
