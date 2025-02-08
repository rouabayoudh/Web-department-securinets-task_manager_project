import React, { useState } from 'react';
import TopSidebar from "../components/TopSidebar";
import NotificationsPanel from "../components/NotificationsPanel";
import PorjectSideBar from "../components/PorjectSideBar";

import '../assets/stylesheets/SideBar.css';

import arrowLeft from "../assets/images/TopSidebarImages/arrow-left.svg";
import arrowRight from "../assets/images/TopSidebarImages/arrow-right.svg";

function UpperSidebar() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`sidebar ${isVisible ? '' : 'hidden'}`}>
        <div className="sidebar-header">
            <span>Project M.</span>
            <img src={isVisible ? arrowLeft : arrowRight} alt="" onClick={toggleSidebar}/>
        </div>
        {isVisible && (
            <div className="sidebar-content">
                <TopSidebar />
                <PorjectSideBar />
                <NotificationsPanel />
            </div>
        )}
    </div>
  );
}

export default UpperSidebar;