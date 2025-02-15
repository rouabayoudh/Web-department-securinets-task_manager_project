import React from "react";
import NavBarButton from "./NavBarButton";
import "../assets/stylesheets/NavBar.css";
import bell from "../assets/images/NavBarImages/bell.svg";
import calendar from "../assets/images/NavBarImages/calendar.svg";
import mq from "../assets/images/NavBarImages/messages-question.svg";


function NavBar() {
    const buttons = [
        { name: "Notifications", icon: bell },
        { name: "Calendar", icon: calendar },
        { name: "Messages & Questions", icon: mq },
    ];
    return (
        <nav className="navbar">
            <div className="navbar-right">
                {buttons.map((button) => (
                    <NavBarButton name={button.name} icon={button.icon} />
                ))}
            </div>
        </nav>
    )
}

export default NavBar;