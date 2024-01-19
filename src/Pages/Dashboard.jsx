import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { Outlet } from "react-router-dom";
import DashboardNavLinks from "../Components/DashboardNavLinks";

const Dashboard = () => {
  return (
    <div className="container">
      <DashboardNavLinks />
      <Outlet />
    </div>
  );
};

export default Dashboard;
