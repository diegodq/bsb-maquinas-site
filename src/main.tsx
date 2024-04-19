import ReactDOM from 'react-dom/client';
import App from './App';
import React from 'react';
import { GlobalStyled } from './styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
    <GlobalStyled />
    <App />
  </React.Fragment>
);