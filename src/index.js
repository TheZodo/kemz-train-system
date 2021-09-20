import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import theme from 'libs/components/theme'
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import getApolloClient from 'libs/auth-react/getApolloClient';


const client = getApolloClient({
  port: 4002, productionServerUrl: ''
})

ReactDOM.render(
  <React.StrictMode>
        <ApolloProvider client={client} >
   
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>

      </ApolloProvider>

  </React.StrictMode >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
