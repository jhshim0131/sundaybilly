/* import ReactDOM from 'react-dom/client'; */
import ReactDOM from 'react-dom';
import React, { useState } from 'react'; //22.05.22 (원래는 useState없음)
//import Appex from './example/Appex';
import App from './App';
import Demo from './demo';


/*  const root = ReactDOM.createRoot(document.getElementById('root')); 
 root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */

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

