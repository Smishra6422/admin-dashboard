import React from "react";
import AdminData from "../AdminData/AdminData.component";
import AdminMenu from "../AdminMenu/AdminMenu.component";
import "./admin.style.scss";

function Admin() {
  return (
    <div className="admin-container">
      <AdminMenu />
      <AdminData />
    </div>
  );
}

export default Admin;
