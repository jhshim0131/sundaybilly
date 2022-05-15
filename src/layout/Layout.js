import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//component
import Navigation from './Navigation';
import Posting from '../page/Posting'

// style
import '../css/layout.css';

//icon
import {MenuOutlined,LeftOutlined} from '@ant-design/icons';



function Layout(props) {
    const [Open, setOpen] = useState(false);
    return (
      <>
      <div className="header">
      <div className="navtogglebBtn" onClick={() => setOpen(!Open)}>
      {Open ? <LeftOutlined /> : <MenuOutlined />}
       </div>
    <div className="header-title">Header</div>
      </div>
      <div className="containderPage">
      <aside className={`${Open ? "open" : ""} sidenav`}><Navigation/></aside>
        <main className="main">
          <Router>
            <Routes >
              <Route path="/billy/posting" element={<Posting/>}>
              </Route>
            </Routes>
          </Router>
        </main>
      </div>
      <div className="footer">Footer</div>
      </>
    );
}



export default Layout;