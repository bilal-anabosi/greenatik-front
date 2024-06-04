// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserContextProvider from './pages/account/context/User.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import './i18n';  // Import the i18n configuration

const color = green[600];
const theme = createTheme({
  palette: {
    primary: {
      main: color,
    },
    secondary: {
      main: '#3f51b5',
    },
  },
});

AOS.init();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </UserContextProvider>
  </React.StrictMode>
);

reportWebVitals();
