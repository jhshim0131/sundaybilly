import React,{useState} from "react";
import './css/app.css'
import Navigation from './layout/Navigation'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Posting from './page/Posting'
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="App">
    {/* <Layout /> */}
    <Navigation/>
  </div>
  );
}

export default App;