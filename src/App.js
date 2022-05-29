import React,{useState} from "react";
import './css/app.css'
import Navigation from './layout/Navigation'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Posting from './page/Posting'
import Layout from "./layout/Layout"; 

/*  import { Component } from 'react';
/* import './App.css'; 
import { Layout } from 'antd';
import Uploader from './components/Uploader';  */


function App() {
  return (
    // <div className="App">
    //  <h1>sunday billy</h1>
    // </div>
    <div className="App">
  {/*    <Uploader />  */}
     <Layout /> 
    </div>
  );
}

export default App;
