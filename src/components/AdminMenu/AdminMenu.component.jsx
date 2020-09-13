import React from "react";
import "./admin-menu.style.scss";

function AdminMenu() {
  return (
    <div className="admin-menu-container ">
      <ul class="list-group">
        <li class="list-group-item">GUIDES</li>
        <li class="list-group-item">
          <h6>Admin Guide</h6>
          <span>6 folders</span>
        </li>
        <li class="list-group-item">
          <h6>Manager Guide</h6>
          <span>9 folders</span>
        </li>
        <li class="list-group-item">
          <h6>Employee Guide</h6>
          <span>8 folders</span>
        </li>
        <li class="list-group-item">
          <h6>CS Guide</h6>
          <span>11 folders</span>
        </li>
      </ul>
    </div>
  );
}

export default AdminMenu;
