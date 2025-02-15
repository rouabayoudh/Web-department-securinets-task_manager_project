import React from "react";
import "../assets/stylesheets/NavBar.css";
import ProfileNav from "../components/ProfileNavbar";
import SearchBar from "../components/SearchBar";
import NavBarButton from "../components/NavBarButton";

function NavBar() {
  return (
    <div className="navbar">
      <SearchBar />
      <NavBarButton />
      <ProfileNav />
    </div>
  );
}

export default NavBar;
