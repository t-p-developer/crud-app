import './style.css';

import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const { worker } = require('./mocks/browser');
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
