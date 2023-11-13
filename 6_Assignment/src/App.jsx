import { Routes, Route, Link, Outlet, useLocation,Navigate } from "react-router-dom";
import Login from "./LoginPage";
import Dashboard from "./DashboardPage";
import Home from "./HomePage"
import "./App.css";

import DashboardRoutes from "./DashboardPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*" element={<DashboardRoutes />} />
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
        <ul className="navbaritems d-flex justify-content-between">
        <li
            className={`${location.pathname === "/" ? activeCls : ""}`}
          >
            <Link to="/"> Home </Link>
          </li>
          <li className={`${location.pathname === "/login" ? activeCls : ""}`}>
            <Link to="/login"> Login </Link>
          </li>
          <li
            className={`${location.pathname === "/dashboard" ? activeCls : ""}`}
          >
            <Link to="/dashboard"> Dashboard </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
export default App;
