import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';

import App from './App';
import { colors } from 'theme';

export const GlobalStyles = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    list-style: none;
    border: none;
    text-decoration: none;
    box-sizing: border-box;
    &:focus {
      outline: none
    }
  };
  body {
    background-color: ${colors.alabastar};
    color: ${colors.mirage};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
