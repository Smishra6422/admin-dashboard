import React from "react";
import "./aside-bar.style.scss";

const AsideBar = () => {
  return (
    <div className="aside-bar-container">
      <ul className="aside-bar-lists">
        <li className="aside-bar-list">
          <a href="/">
            <img src="/assets/monkey.png" alt="" />
          </a>
          {/* <span></span> */}
        </li>
        <li className="aside-bar-list">
          <a href="/">
            <img src="/assets/profile-picture.png" alt="" />
            <span>My Home</span>
          </a>
        </li>
        <li className="aside-bar-list">
          <a href="/">
            <img src="/assets/features.jpg" alt="" />
            <span>Features</span>
          </a>
        </li>
        <li className="aside-bar-list">
          <a href="/">
            <img src="/assets/issues.jpg" alt="" />
            <span>Issues</span>
          </a>
        </li>
        <li className="aside-bar-list">
          <a href="/">
            <img src="/assets/devRequests.jpg" alt="" />
            <span>Dev Requests</span>
          </a>
        </li>
        <li className="aside-bar-list">
          <a href="/">
            <img src="/assets/product.jpg" alt="" />
            <span>Product</span>
          </a>
        </li>
        <li className="aside-bar-list">
          <a href="/">
            <img src="/assets/signups.jpg" alt="" />
            <span>Signups</span>
          </a>
        </li>
        <li className="aside-bar-list">
          <a href="/">
            <img src="/assets/knowledge.jpg" alt="" />
            <span>Knowledge</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AsideBar;
