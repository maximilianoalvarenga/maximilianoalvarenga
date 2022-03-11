import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";


import App from './App';
import { GlobalStyle } from './GlobalStyle';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);