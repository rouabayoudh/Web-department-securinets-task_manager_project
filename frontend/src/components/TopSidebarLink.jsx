import React from "react";
import "../assets/stylesheets/TopSideBar.css";

function TopSidebarLink({ index, name, icon, link }) {
    return (
        <a key = {index} className="top-sidebar-button" href={link}>
            <img src={icon} alt={name} />
            <span aria-label={name}>{name}</span>
        </a>    
    );
}

export default TopSidebarLink;