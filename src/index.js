import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import * as atatus from 'atatus-spa';

atatus.config('b840e8ecf87c481c9b47e73806b44baf').install();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();