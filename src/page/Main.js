//component
import Calendar from './Calendar'
import Gallery from './Gallery'


import React,{useEffect, useState} from 'react';
import { Link , BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Switch, Tabs} from 'antd';
import 'antd/dist/antd.css';
import { render } from 'react-dom';
const { TabPane } = Tabs;




function Main(props) {
    const [Open, setOpen] = useState(false);
    const [gallery, setCalendar] = useState(false);
/*     const button = () => setCalendar(true);

    useEffect(()=>{
      render(){
        
      }
    }, [gallery]) */
    const onChangeToggle = (e) => {
  /*     if (gallery === false){
        <h1>갤러리</h1>
      }   */
    
      const main3 = document.querySelector('.main3')
      const main4 = document.querySelector('.main4')
      const main5 = document.querySelector('.main5')
      if(e === true){
        main5.setAttribute('style', 'display:none');
        main4.setAttribute('style', 'display:block');
      }else if(e === false){
        main4.setAttribute('style', 'display:none');
        main5.setAttribute('style', 'display:block');
      }
  //    const preview = e === true?<Gallery/>:<Calendar/>; 
/*       if(e === true){
        main3.setAttribute('src', './Gallery') 
        main3.textContent= "갤러리";
     }else if(e === false){
      main3.setAttribute('src', './Calendar')
      main3.textContent = "캘린더";
     }  */

    }
 
 /*    const onChange = (key) => {
      console.log(key);
    }; */
   
    return (
      <>  
 
      
{/*          <div className="main2">
     
        <Router>
            <Routes>
              <Route path="billy/Gallery"  component={<Gallery/>}  element={<Gallery/>} />
             {/*  <Route path="billy/Calendar"  component={<Calendar/>} element={<Calendar/>} />    
             </Routes>
          </Router>
         
          </div> */}
       <div className='main2' style={{marginBottom:'50px'}}>
       <Switch checkedChildren="GAL" unCheckedChildren="CAL" defaultChecked  onChange={onChangeToggle} />
       </div>
       <div className='main3'>
       <div className='main4'>
           <Gallery/>
           </div>
         <div className='main5' style={{display:"none"}}>
           <Calendar />
           </div>
{/*   <Tabs defaultActiveKey="1" onChange={onChange}>
       <TabPane tab="Tab 1" key="1">
     <Gallery />
    </TabPane>
    <TabPane tab="Tab 2" key="2">
    <Calendar />
    </TabPane>
         </Tabs> */}
     {/*  {e === true ? <h1>리액트입니다.</h1> : <h1>리액트가 아닙니다</h1>} */}
      </div>

      </>
    );
 
}



export default Main;

// aria-checked="false"