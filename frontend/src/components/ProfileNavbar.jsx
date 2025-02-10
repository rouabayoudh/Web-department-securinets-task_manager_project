import React, { useState } from "react";
import "../assets/stylesheets/TopSideBar.css";
import profileIcon from "../assets/images/profile.jpg";
import angleDown from "../assets/images/angle-down.png";

function ProfileNav() {
    const userDetails = {
      "name": "Anima Agrawal",
      "location": "U.P, India",
      "profileIcon": profileIcon,
    }

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => { setIsDropdownOpen(!isDropdownOpen); };


    return (
        <div className="profile-container">
          <div className="profile-text">
            <h2>{userDetails.name}</h2>
            <p>{userDetails.location}</p>
          </div>
          <img src={userDetails.profileIcon} alt="profile" className="profile-img"/>
          <img src={angleDown} alt="?" className="profile-angle" onClick={toggleDropdown} />
            {isDropdownOpen && (
              <div className="dropdown-menu">
                  <button className="dropdown-item">Profile</button>
                  <button className="dropdown-item dropdown-border">Settings</button>
                  <button className="dropdown-item">Logout</button>
              </div>
            )}
        </div>
    );
}

export default ProfileNav;
