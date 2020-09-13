import React from "react";
import "./navbar.style.scss";

function Navbar() {
  return (
    <div className="navbar-conainer">
      <ul className="navbar-item-lists">
        <li className="navbar-list">
          <a href="/">Summary</a>
        </li>
        <li className="navbar-list">
          <a href="/">Help Docs</a>
        </li>
        <li className="navbar-list">
          <a href="/">Dev Request</a>
        </li>
        <li className="navbar-list">
          <a href="/">My Drafts</a>
        </li>
        <li className="navbar-list">
          <a href="/">My Article</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
