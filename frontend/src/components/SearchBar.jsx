import React from "react";
import "../assets/stylesheets/SearchBar.css";
import searchIcon from "../assets/images/search-icon.png"; // Import the image

function SearchBar() {
  return (
    <div className="search-bar">
      <img src={searchIcon} alt="Search" className="search-icon" />
      <input type="text" placeholder="Search for anything..." className="search-input" />
    </div>
  );
}

export default SearchBar;
