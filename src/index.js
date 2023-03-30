import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { App } from 'components/App';
import { theme } from './constants';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/so-yummy-app">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
