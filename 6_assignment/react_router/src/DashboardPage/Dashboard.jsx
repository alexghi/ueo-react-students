import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Dashboard = () => {
    let location = useLocation();
    const activeCls = "currently-active";
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <nav>
        <ul className="navbaritems">
          <li className={`${location.pathname === "/dashboard" ? activeCls : ""}`}>
            <Link to="/dashboard"> Dashboard </Link>
          </li>
          <li className={`${location.pathname === "/dashboard/settings" ? activeCls : ""}`}>
            <Link to="/dashboard/settings"> Settings </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
