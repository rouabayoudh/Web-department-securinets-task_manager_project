import React from "react";
import "../assets/stylesheets/TopSideBar.css";
import TopSidebarLink from "./TopSidebarLink";

function TopSidebar() {
    const buttons = [
        { name: "Home", icon: "../assets/images/TopSidebarImages/home.svg", link: "/" },
        { name: "Messages", icon: "../assets/images/TopSidebarImages/messages.svg", link: "/" },
        { name: "Tasks", icon: "../assets/images/TopSidebarImages/tasks.svg", link: "/" },
        { name: "Members", icon: "../assets/images/TopSidebarImages/members.svg", link: "/" },
        { name: "Settings", icon: "../assets/images/TopSidebarImages/settings.svg", link: "/" },
    ];

    return (
        <div className="top-sidebar">
            {buttons.map((button, index) => (
                <TopSidebarLink index={index} name={button.name} icon={button.icon} link={button.link}/> 
            ))}
        </div>
    );
}

export default TopSidebar;