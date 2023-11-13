// DashboardPage.js
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Settings from "./settings";
import Description from "./description/Description";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard/settings">Settings</Link>
          </li>
          <li>
            <Link to="/dashboard/description">Description</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}



function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="settings" element={<Settings />} />
      <Route path="description" element={<Description />} />
    </Routes>
  );
}

export default DashboardRoutes;
