import React from "react";
import "../assets/stylesheets/TopSideBar.css";
import TopSidebarLink from "./TopSidebarLink";
import homeIcon from "../assets/images/TopSidebarImages/home.svg";
import messagesIcon from "../assets/images/TopSidebarImages/messages.svg";
import tasksIcon from "../assets/images/TopSidebarImages/tasks.svg";
import membersIcon from "../assets/images/TopSidebarImages/members.svg";
import settingsIcon from "../assets/images/TopSidebarImages/settings.svg";

function TopSidebar() {
    const buttons = [
        { name: "Home", icon: homeIcon, link: "/" },
        { name: "Messages", icon: messagesIcon, link: "/" },
        { name: "Tasks", icon: tasksIcon, link: "/" },
        { name: "Members", icon: membersIcon, link: "/" },
        { name: "Settings", icon: settingsIcon, link: "/" },
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