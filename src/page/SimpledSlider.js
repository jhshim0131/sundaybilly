import React, { Component } from 'react';

//lib
import Slider from "react-slick"

//css
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';

function SimpledSlider(props) {
    let file = new Array();
    const [postfiles, setPostfiles] = useState({
        file: [],
        previewURL: ''
    });

    const uploadFile = (e) => {
        e.stopPropagation();;
        let reader = new FileReader();
        console.log('e.target.files : ' , typeof(e.target.files) )
        file.push(e.target.files);
        console.log('file : ' , file)
        // const filesArray = Array.from(e.target.files);

        reader.onloadend = () => {
            setPostfiles({
                file: file,
                previewURL: reader.result,
            });
            console.log('postfiles ::' + postfiles)

            if (file) {
                console.log('file if 문 inin ')
                const imgBase64 = typeof reader.result === 'string' ? reader.result : '';
                console.log('imgBase64 : ' + imgBase64)
                // 이미지 src를 변경하여 이미지 미리보기를 해준다.   
                reader.readAsDataURL(file);
            }
        }
    }

    //css
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 10, //화살표 크기
        // dots: true
        // autoplay:true
        //  speed: 500,
    };
    //슬라이드 클릭시 파란선을 제거하기 위해서 작성
    const StyledSlider = styled(Slider)`
    .slick-slide div{
      outline: none;
    }`;


    return (
        <div>
            <h2> Single Item</h2>
            {/* <Slider {...settings}>
                <div>이미지이미지</div>
                    {postfiles.map((Files)=>{
            Files.type.includes("jpg") ? (
                <img src={postfiles.previewURL} />
        ) : (
            <video src={postfiles.previewURL} />
        );
        })}
            </Slider> */}
                <input
                    id="upload-file"
                    type="file"
                    accept="image/*, video/*"
                    multiple
                    onChange={uploadFile}
                />
                <img src="" height="200" alt="이미지 미리보기..."></img>
                {/* <label htmlFor="upload-file">파일선택</label> */}


        </div>

    );
}

export default SimpledSlider;

{/* <Container>
<h2> Single Item</h2>
<StyledSlider {...settings}
>
  {imgItem.map(imgItems => {
    return (
      <div key={imgItems.id}>
        <ImageContainer>
          <Image src={imgItems.url} />
        </ImageContainer>
      </div>
    );
  })}
</StyledSlider>
</Container> */}