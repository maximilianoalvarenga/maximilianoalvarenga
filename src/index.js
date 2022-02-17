import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";


import App from './App';
import { GlobalStyle } from './styles/GlobalStyle';


ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename='/'>
      <App />
      <GlobalStyle />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);