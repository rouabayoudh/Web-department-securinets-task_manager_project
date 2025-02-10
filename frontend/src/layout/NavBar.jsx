import React from "react";
import "../assets/stylesheets/NavBar.css";
import ProfileNav from "../components/ProfileNavbar";
import SearchBar from "../components/SearchBar";

function NavBar() {
  return (
    <div className="navbar">
        <ProfileNav /> 
        <SearchBar />  
    </div> 
  );
}

export default NavBar;
