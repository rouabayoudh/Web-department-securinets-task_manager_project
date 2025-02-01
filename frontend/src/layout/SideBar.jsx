// SideBar.js
import React from "react";
import TopSidebar from "../components/TopSidebar";
import NotificationsPanel from "../components/NotificationsPanel";
import "../assets/stylesheets/SideBar.css";  // Import the CSS file
import PorjectSideBar from "../components/PorjectSideBar";

function SideBar() {
    return (
        <div >   
            <TopSidebar />
            <PorjectSideBar />
            <NotificationsPanel />
        </div>
    );
}

export default SideBar;
