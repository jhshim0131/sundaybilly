// eslint-disable-next-line
import React, { Component } from "react";
import './slide.scss';
//import * as slide from './slide.js'
import { Carousel } from 'antd';
import 'antd/dist/antd.css'; 

/* import Slider from "react-slick"; */

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export default class SimpleSlider extends React.Component {
 
    state = { selectedFiles: null,  message: '', title: '' , slideSpot: 0,};
    componentDidUpdate = prevState => {
      if (prevState.selectedFiles !== this.state.selectedFiles) {
        this.renderPreviews();
        this.slide(); 
        
      }
    };

    constructor(props){
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e){
      this.setState({
        [e.target.name]: e.target.value

      });
  }

  handleClick(e){
  
    alert('title : '+this.state.title+'message : '+this.state.message );
      this.setState({
          message: '',
          title: ''
      });
  }

    fileChangedHandler = event => {
      const files = event.target.files; 
      const filesList = Array.from(files);
    //  const arr = [files];
      console.log("~~~filesList~~~~"+filesList);
    //  const newArray = arr.concat(filesList);
      this.setState({
        selectedFiles: filesList,
        [event.target.name]: files
      });
   /*    console.log(files); */
      console.log({ filesList })
    };  

    
    renderPreviews = () => {

      const { selectedFiles } = this.state;
     // const previewContainer = document.getElementById("preview-container");
      const track = document.querySelector(".track");
      const naviIndicator = document.querySelector(".nav-indicator");  
     // const xbutton = document.querySelector(".x-button")   
      console.log("selectedFiles====> " + selectedFiles);

      for (let i = 0; i < selectedFiles.length; i++) { 
        console.log("selectedFiles.length" + selectedFiles.length);
        const div = document.createElement("div")
        const dot = document.createElement("div");
        const xbtn = document.createElement("input");
        //const track = document.querySelector('.track');
        const slides = Array.from(track.children);
        console.log("slies length ==== >> "+ slides.length)
      //  div.className = `slide active${i}`;
      if(slides.length == 0){
        div.className = `slide active`;
        dot.className = `dot active`;
        xbtn.className = 'xbtn';
      }else{
        div.className = `slide`;
        dot.className = `dot`;
        xbtn.className = 'xbtn';
      }           
      xbtn.setAttribute('type', 'button');
      xbtn.setAttribute('value', 'X');
      //xbtn.setAttribute('delFile', file.name);
        console.log(selectedFiles[i].type.includes("image/"));
        //eslint-disable-next-line
        const preview = selectedFiles[i].type.includes("image/") == true?document.createElement("img"):document.createElement("video"); 
        if(document.getElementsByTagName("video")){
          preview.setAttribute('autoplay', 'true');      
          preview.setAttribute('controls', '');
          preview.setAttribute('loop', 'loop');
        }
        div.appendChild(preview);
        div.appendChild(xbtn);
        preview.className = `preview`;
        track.appendChild(div);
        naviIndicator.appendChild(dot);

        const delButton = document.querySelector('.xbtn');
       // const delButtonx = Array.from(delButton.children);
        delButton.addEventListener('click',function(e){
          var ele = e.srcElement;
          alert("ele" + ele);
     //2. 첨부한 파일 삭제
     //document.querySelector('.file-input').value = "";           
                   /*    if(name == selectedFiles[i].name){
                       selectedFiles.splice(i, 1);      
                     }  */
                  //   alert(selectedFiles[i].name)
                     alert(slides[i])
                     if(slides[i] === undefined){
                      selectedFiles.splice(i, 1);
                     }
   
   });

        const reader = new FileReader();
        reader.onload = function(evt) {
          preview.src = reader.result;
        };
        reader.readAsDataURL(selectedFiles[i]);
       

      }   

    };


 slide = () => {
    console.log("지나가긴 하니")
        const track = document.querySelector(".track");
        const slides = Array.from(track.children);
        const prevBtn = document.querySelector(".btn.btn-back");
        const nextBtn = document.querySelector(".btn.btn-next");
        const navIndicator = document.querySelector(".nav-indicator");
        const dots = Array.from(navIndicator.children) 
        const slideSize = slides[0].getBoundingClientRect()
        const slideWidth = slideSize.width;
        console.log("slidsize==>" + slideSize);
        console.log("slideWidth==>" + slideWidth);
        console.log("slides==>" + slides); 



        
   
    let counter = 1;
        const size = slideSize;
        track.style.transform = "translateX(" + -size * counter + "px)"; 
      /*   `translateX(-${targetSlide.style.left})`   */

        const slidePosition = (slide, index) => {         
          slide.style.left = `${slideWidth * index}px`;
          console.log("lefttttttt" + slide.style.left ); //400  800
          console.log("index====>>>>" + index ); //1  2
        }
        slides.forEach(slidePosition)  
        
      const slideToMove = (track, currentSlide , targetSlide,index ) => {
           console.log("index button ===> " + index)
          track.style.transform = `translateX(-${targetSlide.style.left})`;
         // console.log("targetSlide" + targetSlide.style.left)
          currentSlide.classList.remove('active');

           targetSlide.classList.add('active'); 
        }  

        function updateDots(current, target){
          current.classList.remove('active')
          target.classList.add('active')
        }
       
  
      const btnShowHide = (targetIndex, prevBtn, nextBtn, slides) => {
            // eslint-disable-next-line
          if(targetIndex == 0){
            prevBtn.classList.add('hidden')
            nextBtn.classList.remove('hidden')
            // eslint-disable-next-line
          }else if(targetIndex == slides.length - 1){
            prevBtn.classList.remove('hidden')
            nextBtn.classList.add('hidden')
          }else{
            prevBtn.classList.remove('hidden')
            nextBtn.classList.remove('hidden')
          }
        }  
      

     nextBtn.addEventListener('click', (e) => {
      const slides = Array.from(track.children);
          var currentSlide = track.querySelector('.active')
          console.log("currentSlide====>" + currentSlide);
          var nextSlide = currentSlide.nextElementSibling;
/*           if(nextSlide === null){
            nextSlide = slides[1]
          }else{
            nextSlide = currentSlide.nextElementSibling;
          } */
          var currentDot = navIndicator.querySelector('.active');
          var nextDot = currentDot.nextElementSibling;
          console.log("nextSlide 1===>" + nextSlide);          
          console.log("slides next ==> " + slides) 
          var nextIndex = slides.findIndex(slide => slide === nextSlide)  
    /*       if (nextIndex < 0){
             nextIndex = 0
          }else{
            nextIndex = slides.findIndex(slide => slide === nextSlide)  
          }  */          
          console.log("nextSlide 2===>" + nextSlide);
          console.log("nextIndex 1===>" + nextIndex);  //1, 2, -1
          slideToMove(track, currentSlide, nextSlide);
          updateDots(currentDot, nextDot);
          btnShowHide(nextIndex, prevBtn, nextBtn, slides);
          if(e.detail > 1) return;
        });  
        
      prevBtn.addEventListener('click', (e) => {
        const slides = Array.from(track.children);
          var currentSlide = track.querySelector('.active');
          var prevSlide = currentSlide.previousElementSibling;
          var currentDot = navIndicator.querySelector('.active');
          var prevDot = currentDot.previousElementSibling;
          var prevIndex = slides.findIndex(slide => slide === prevSlide)
        
           slideToMove(track, currentSlide, prevSlide);
          updateDots(currentDot, prevDot);
          btnShowHide(prevIndex, prevBtn, nextBtn, slides)
          console.log("eeeeeeee->>>"+e.detail);
          if(e.detail > 1) return;
        });
        
        navIndicator.addEventListener('click', (e) => {
          var targetDot  = e.target.closest('.dot');
          if(!targetDot) return;
          console.log("tragerDot ===>> "+ targetDot)
          var currentSlide = track.querySelector('.active');
          var currentDot = navIndicator.querySelector('.active');
          var targetIndex = dots.findIndex(dot => dot === targetDot)
          var targetSlide = slides[targetIndex];
          console.log("targetSlide ===>> "+ targetSlide)
          slideToMove(track, currentSlide, targetSlide)
          updateDots(currentDot, targetDot);
          btnShowHide(targetIndex, prevBtn, nextBtn, slides)
          if(e.detail > 1) return;
         // blur(track, 5)
        })



        
    
    }

    render() {
     
      return (
        <div className="App" style={{ marginTop: "100px" }}>
          <div className="button">
            <label for="btnAtt">
              👉 추억추가 👈
          </label>
        </div>
       <input type="file" multiple onChange={this.fileChangedHandler} id="btnAtt" name="file"/>
{/*                 <input
                    type="text"
                    name="message"
                    placeholder="내용이에요"
                    value={this.state.message}
                    onChange={this.handleChange}
                    />
                 <input
                        type="text"
                        name="title"
                        placeholder="제목이에요"
                        value={this.state.title}
                        onChange={this.handleChange}
                  /> */}
   
                  <button onClick={this.handleClick}>확인</button>
                  <input type='button' value='목록' id='view_list_button'
       onClick={() => window.location.href = '/'}/>
          <div className="carousel">
          
          <div className="btn btn-back hidden">
           <FaArrowLeft className="fas fa-arrow-left" />
           <FaChevronLeft className="fas fa-chevron-left left-indicator" />
           맨앞
          </div>
          <div className="viewbox">
      
          <div className="track" style={{ transform: "translateX(0px)", filter: "blur(0px)" }}/>

          </div>
         

          <div className="btn btn-next">
  <FaArrowRight className="fas fa-arrow-right" />
  <FaChevronRight className="fas fa-chevron-right right-indicator"/ >
    맨뒤
  </div>

  <div className="nav-indicator" />

            </div>
  
        </div>
    
      )
    }

  }
  
