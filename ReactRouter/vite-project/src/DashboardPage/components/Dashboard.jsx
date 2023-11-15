import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ dashboard }) => {
  const { id, name } = dashboard;
  const navigate = useNavigate();

  return (
    <div
      className="dashboard"
      onClick={() => {
        navigate(`/dashboards/${id}`);
      }}
    >
      <h3>{name}</h3>
    </div>
  );
};

export default Dashboard;
