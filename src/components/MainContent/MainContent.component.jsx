import React from "react";
import Admin from "../Admin/Admin.component";
import Header from "../Header/Header.component";
import Navbar from "../Nvabar/Navbar.component";
import "./main-content.style.scss";

function MainContent() {
  return (
    <div className="main-content">
      <Header />
      <Navbar />
      <Admin />
    </div>
  );
}

export default MainContent;
