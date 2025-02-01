import React from "react";
import TopSidebar from "../components/TopSidebar";
import NotificationsPanel from "../components/NotificationsPanel";
import "../assets/stylesheets/SideBar.css";  // Import the CSS file

function SideBar() {
    return (
        <div className="sidebar-container">   {/* Use the class name here */}
            {/* Top Sidebar */}
            <TopSidebar />

            {/* Notifications Panel */}
            <NotificationsPanel />
        </div>
    );
}

export default SideBar;
