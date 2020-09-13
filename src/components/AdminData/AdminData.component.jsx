import React from "react";
import "./admin-data.style.scss";

let data = [
  {
    title: "Org Module",
    description:
      "Manage Onboarding and Exit processes Organization asset,Expenses and Travel workflow etx. here",
  },
  {
    title: "Performance",
    description:
      "Manage Employee Objectives, Skills,Compoetencies, Reviews here",
  },
  {
    title: "Time Attend",
    description:
      "Configure Leave  and Attendance tracking ploicies, employee Assignments, Productivity Tracker here",
  },
  {
    title: "Project",
    description:
      "Manage Task, Timesheets and allother functions pertainig to projects here",
  },
  {
    title: "Payroll",
    description: "Resolves all your Payroll related queries",
  },
  {
    title: "Settings",
    description: "You can define all Your settings here",
  },
];

function AdminData() {
  return (
    <div className="admin-data-container card">
      <div class="card-body admin-heading-container">
        <h6 class="card-title">Admin Guide</h6>
        <p class="card-text">The Admin guide of Help Docs</p>
      </div>
      <div className="admin-detail-card-container ">
        {data.map((val, index) => (
          <div className="card" key={index}>
            <div class="card-header">
              <p>{val.title}</p>
              <img src="/assets/options.jpg" alt="" />
            </div>
            <div class="card-body">
              <p class="card-text">{val.description}</p>
            </div>
          </div>
        ))}
        <div className="card add-container">
          <div class="card-body">
            <img src="/assets/add.jpg" alt="" />
            <p>Add New</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminData;
