import { Routes, Route, Link, Outlet, useLocation } from "react-router-dom";
import LoginPage from "./LoginPage";
import DashboardPage from "./DashboardPage";
import SettingsPage from "./SettingsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/login" element={<LoginPage />} />
          <Route path="/dashboard">
            <Route path="/dashboard" element={<DashboardPage />}/>
            <Route path="/dashboard/settings" element={<SettingsPage />}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  let location = useLocation();
  const activeCls = "currently-active";

  return (
    <div>
      <nav>
        <ul className="navbaritems">
          <li className={`${location.pathname === "/login" ? activeCls : ""}`}>
            <Link to="/login"> Login </Link>
          </li>
          <li className={`${location.pathname === "/dashboard" ? activeCls : ""}`}>
            <Link to="/dashboard"> Dashboard </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
