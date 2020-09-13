import React from "react";
import "./header.style.scss";

function Header() {
  return (
    <div className="header-container">
      <div className="left-menu">
        <div className="search-user-container">
          <img src="/assets/searchUser.jpg" alt="" />
          <input type="text" placeholder="Search Org or Org User" />
        </div>
        <div>
          <img src="/assets/search.jpg" alt="" />
          <input
            type="text"
            placeholder="Search Customer Request/Feature Story/Dev Request"
          />
        </div>
      </div>
      <div className="right-menu">
        <div>
          <img src="/assets/notifications.jpg" alt="" />
          <span>Notifications</span>
        </div>
        <div className="user-container">
          <img src="/assets/profile-picture.png" alt="" className="user-logo" />
          <span>Gajan Prasad</span>
          <img
            src="/assets/down-arrow.svg"
            alt=""
            className="user-dropdown-menu"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
