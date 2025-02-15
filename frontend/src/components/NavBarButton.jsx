import React from "react";
import "../assets/stylesheets/NavBarButton.css";
import Calendar from "../assets/images/NavBarImages/calendar.svg";
import MeQ from "../assets/images/NavBarImages/messages-question.svg";
import Bell from "../assets/images/NavBarImages/bell.svg";

function NavBarButton() {
    const buttons = [
        { name: "Calendar", icon: Calendar},
        { name: "Message", icon: MeQ},
        { name: "Notification", icon: Bell},
    ];
    return (
    <div classame="navbar-buttons">
        {buttons.map((button) => (
            <button className="navbar-button">
                <img src={button.icon} alt={button.name} />
            </button>
            ))}
    </div>
    );
}

export default NavBarButton;