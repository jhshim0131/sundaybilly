import React, { useState } from "react";
import {MenuData} from './MenuData';



function Navigation(props) {

    return (
        <>
        <div className='nav-menu'>
            {/* 네비게이션 토글*/}
                    <ul>
                    {/* 사이드바 메뉴 데이터 넣기 */}
                    {MenuData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <li className="sidebarItemList">
                           <a href={item.path} >{item.title}</a>
                        </li>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

export default Navigation;