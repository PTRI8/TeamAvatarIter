import React from 'react';
import Dashboard from '../containers/Dashboard';
import { Link, redirect, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      light: '#CCE1EB',
      main: '#71ABC5',
      dark: '#0F1031',
      contrastText: '#fff',
    },
    secondary: {
      light: '#dbffff',
      main: '#a7ffeb',
      dark: '#75ccb9',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    MuiTypography: {
      defaultProps: {
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
      variantMapping: {
        h1: 'h2',
        h2: 'h2',
        h3: 'h2',
        h4: 'h2',
        h5: 'h2',
        h6: 'h2',
        subtitle1: 'h2',
        subtitle2: 'h2',
        body1: 'span',
        body2: 'span',
      },
    },
  },
});


function App() {
  return (<ThemeProvider theme={theme}>
    <Dashboard/>
  </ThemeProvider>);
}

export default App;