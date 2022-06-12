import React, { useEffect, useRef, useState, memo } from "react";
//lib
import Quill from "quill";
import DatePicker, { registerLocale } from "react-datepicker";

//icon
import {
  BiHappyHeartEyes,
  BiSad,
  BiShocked,
  BiLaugh,
  BiMehAlt,
  BiMeh,
  BiCool,
} from "react-icons/bi";
import { FaRegSmileBeam, FaRegAngry } from "react-icons/fa";

//file
import SimpledSlider from "./SimpledSlider";
import Responsive from "./comfunc/Responsive";

//css
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import "quill/dist/quill.bubble.css";
import "../css/posting.css";

const EditorBlock = styled(Responsive)`
  /* 페이지 위아래 여백 지정 */
  padding-top: 2rem;
  padding-bottom: 5rem;
`;

const TitleInput = styled.input`
  outline: none;
  border: none;
  border-bottom: 2px solid #d5d5d5;
  font-size: 2rem;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
  width: 80%;
`;

const QuillWrapper = styled.div`
  /* 최소 크기 지정 및 padding 제거 */
  .ql-editor {
    padding: 0;
    min-height: auto;
    font-size: 1.125rem;
    line-height: 1.5;
    cursor
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;

function Posting(props) {
  const quillElement = useRef(null); // quill를 적용할 div element 설정
  const quillInstance = useRef(null); // quill의 인스턴스 설정

  let startDate = new Date();
  const [year, setYear] = useState(startDate.getFullYear());
  const [month, setMonth] = useState(startDate.getMonth());
  const [date, setDate] = useState(startDate.getDate());
  const [saveBtn, setSave] = useState(true);
  //    const [day, setDay ] = useState(startDate.getDay());

  const onChangeYear = (e) => {
    setYear(e.target.value);
    console.log("year : " + year);
  };

  const onChangeMonth = (e) => {
    setMonth(e.target.value);
    console.log("month : " + month);
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
    console.log("date : " + date);
  };

  // const onChangeDay = (e) => {
  //     setDay(getDay(e.target.value))
  //     console.log('getDay(day) : ' + day)
  // }

  const onClickSaveBtn = () => {
    setSave(true);

    // postin quill 수정 상태
    // quillInstance.current.enable();
  };

  const onClickEditBtn = () => {
    setSave(false);
    // quillInstance.current.enable(false);

  }

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: "bubble",
      placeholder: "이야기하기...",
      modules: {
        toolbar: [
          [{ header: "1" }, { header: "2" }],
          [{ size: ["small", false, "large", "huge"] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
          [
            { color: ["red", "yellow", "blue", "white"] },
            { background: ["black", "white", "pink", "skyblue"] },
          ],
        ],
      },
    });
  }, []);

  return (
    <>

    {/* disabled="disabled" => div 비활성화 고민  */}
      <div className="writeSave_Btn">
        {/* 수정 삭제 change btn */}
        {saveBtn ? (
            <div>
            <span>
              <button className="btn_profile" onClick={onClickEditBtn}>수정</button>
            </span>
            <span>
              <button className="btn_profile">삭제</button>
            </span>
          </div>
         
        ) : (
          <span>
          <button className="btn_profile" onClick={onClickSaveBtn}>
            저장
          </button>
        </span>
        )}
      </div>
      {/* <div className={saveBtn ? 'saveWrite' : 'unsabeWrite'}> */}
      <div className={saveBtn ?  'unsabeWrite' : ''} >
        <div>
          <div className="dateWrite">
            <input
              type="text"
              className="input_date"
              value={year}
              onChange={onChangeYear}
            />
            <span className="span_date">년</span>
            <input
              type="text"
              className="input_date"
              value={month}
              onChange={onChangeMonth}
            />
            <span className="span_date">월</span>
            <input
              type="text"
              className="input_date"
              value={date}
              onChange={onChangeDate}
            />
            <span className="span_date">일</span>
            {/* <input type="text" value={day} onChange={onChangeDay}/>요일 */}
          </div>
          <div>
            <span>기분이 매우 </span>
            {/* onclick 이벤트 넣을 예정  */}
            <BiHappyHeartEyes className="icon" />
            <BiSad className="icon" />
            <BiShocked className="icon" />
            <BiLaugh className="icon" />
            <BiMehAlt className="icon" />
            <BiMeh className="icon" />
            <BiCool className="icon" />
            <FaRegSmileBeam className="icon" />
            <FaRegAngry className="icon" />
          </div>
        </div>
        <EditorBlock >
          <TitleInput placeholder="오늘 하루..."   />
          {/* <div>
                  <SimpledSlider />
                </div> */}
          <QuillWrapper >
            <div ref={quillElement}></div>
          </QuillWrapper>
        </EditorBlock>
      </div>
    </>
  );
}

function getDay(day) {
  let daylist = new Array(
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  );

  console.log("day : " + day);
  let dayresult = daylist[day];
  console.log("dayresult : " + dayresult);
  return dayresult;

}
export default Posting;