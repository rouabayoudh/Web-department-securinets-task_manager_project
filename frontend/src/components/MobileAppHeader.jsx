import React from "react";
import "../assets/stylesheets/MobileAppHeader.css";
import linkIcon from "../assets/images/refresh.png";
import refreshIcon from "../assets/images/pencil.png";
export default function MobileAppHeader() {
  return (
    <div className="header-container">
      <div className="header-left">
        <h1 className="title">Mobile App</h1>
        <div className="icons">
         
          <button className="icon-button">
            <img src={refreshIcon} alt="Refresh" className="icon-image" />

          </button>
          <button className="icon-button">
            <img src={linkIcon} alt="Link" className="icon-image" />
          </button>
        </div>
      </div>

      <div className="header-right">
        <button className="invite-button">
          <span className="plus">+</span> Invite
        </button>

        <div className="avatars">
          <img src="...." className="avatar" alt="User 1" />
          <img src="...." className="avatar" alt="User 2" />
          <img src="....." className="avatar" alt="User 3" />
          <img src="....." className="avatar" alt="User 4" />
          <div className="avatar more">+2</div>
        </div>
      </div>
    </div>
  );
}