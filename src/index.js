import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Demo from './demo';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
/* import ReactDOM from 'react-dom/client'; */
import ReactDOM from 'react-dom';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

/* const demo = ReactDOM.createRoot(document.getElementById('container'));
demo.render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>
) */


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/* reportWebVitals(); */

