import React from "react";
import Dashboard from "./components/Dashboard"
import { Outlet } from "react-router-dom";
import { dashboardsData } from "../data/data";

const Dashboards = (props) => {
  return (
    <div className="dashboards">
      {dashboardsData.map((dashboard) => {
        return <Dashboard key={dashboard.id} dashboard={dashboard} />;
      })}
      <Outlet />
    </div>
  );
};

export default Dashboards;
