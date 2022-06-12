import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";

//component
import { MenuData } from "./MenuData";
import Posting from "../page/Posting";
//antd
import "antd/dist/antd.min.css";
import { Layout, Menu } from "antd";
import { LeftOutlined , RightOutlined } from "@ant-design/icons";
//style
import "../css/Nav.css";
import styled from "styled-components";

const { Header, Content, Footer, Sider } = Layout;

//styled-component
const MenuSider = styled(Sider)`
  background-color: white;
`;



function Navigation(props) {
  const [collapsed, setCollapsed] = useState(false);

  const postingBtn = () => {

  }
  return (
    <>
    <Layout className="layout">
      {/* <Sider trigge ={null} collapsible collapsed={collapsed}> */}
      <MenuSider trigge={null} collapsed={collapsed} collapsedWidth="0">
        <div className="profile">
          <div className="profile_Name">
           <p><span>프로필 id</span>의 일기장</p> 
          </div>
         <a href="/billy/posting"><button className="btn_profile" onClick={postingBtn}>글쓰기</button></a>
        </div>
        
        <Menu
          theme="white"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={MenuData}
        >
          
        </Menu>
      </MenuSider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            collapsed ?  RightOutlined : LeftOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
            <Routes>
              <Route path="/billy/posting" element={<Posting />}/>
            </Routes>
        </Content>
      </Layout>
    </Layout>
    </>
  );
}

export default Navigation;
