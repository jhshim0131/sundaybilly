import React, { Component, useState } from 'react';
import 'antd/dist/antd.css';
import '../index.css'; 
import { Calendar, Badge,Switch, Modal, Button } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import Modal2 from './Modal';


function getListData(value) {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
        ];
        break;
      case 10:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
          { type: 'error', content: 'This is error event.' },
        ];
        break;
      case 15:
        listData = [
          { type: 'warning', content: 'This is warning event' },
          { type: 'success', content: 'This is very long usual event。。....' },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
          { type: 'error', content: 'This is error event 3.' },
          { type: 'error', content: 'This is error event 4.' },
        ];
        break;
      default:
    }
    return listData || [];
  }
  // <ul className="events" onClick="event.cancelBubble=true; {this.showModal}; return false;">
  /* function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events" onClick={showModal}>
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }

  function showModal({showModal}){

    showModal();

    alert("ㅎㅎㅎㅎㅎ")
  } */


  
  function getMonthData(value) {
    if (value.month() === 8) {
      return 1394;
    }
  }
  
  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }
 


export default () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
   // const { name, email } = this.props.user;
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  
 /*   const onChangeToggle = (e) => {
     if(e === true){
       window.location.href = '/Main'
    }else if(e === false){
        window.location.href = '/Posting'
    }  

} */


return (
    <>
     {/*  <Switch checkedChildren="GAL" unCheckedChildren="CAL" defaultChecked  onChange={onChangeToggle}/> */}


    <br />
 
 <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} /> 
     {/*  <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
      <Modal title="리스트 Modal"  visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>    
        <a href='./main'>Some contents...</a>
        <a href='./main'><Hello name="React" /></a>
      </Modal>
    </>
  );


  //달력 리스트 일부만 밑으로 내림
  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events" onClick={showModal}>
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }

  function Hello({ name }) {
    return <div>{name}님 안녕하세요</div>;
  }
  
  Hello.defaultProps = {
    name: '',
  };





};