import React from "react";
import SideBar from "./layout/SideBar";
import NavBar from "./layout/NavBar";
import MobileAppHeader from "./components/MobileAppHeader";

function App() {
    return (
        <div>
            <NavBar/>
            <SideBar />
            <div className="app-container">
                <MobileAppHeader />
            </div>
        </div>
        );
}

export default App;