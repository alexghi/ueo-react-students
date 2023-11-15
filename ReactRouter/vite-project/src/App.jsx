import "./App.css";
import { Routes, Route, Link, Outlet, useLocation } from "react-router-dom";
import Login from "./LoginPage";
import Dashboard from "./DashboardPage";
import DashboardDetails from "./DashboardPage/components/DashboardDetails";

function App() {
  return (
      <div>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Login />} />
                  <Route path="/dashboards" element={<Dashboard />}>
                      <Route path=":dashboardId" element={<DashboardDetails />} />
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
                  <li className={`${location.pathname === "/" ? activeCls : ""}`}>
                      <Link to="/"> About </Link>
                  </li>
                  <li
                      className={`${location.pathname === "/dashboards" ? activeCls : ""}`}
                  >
                      <Link to="/dashboards"> Dashboard </Link>
                  </li>
              </ul>
          </nav>
          <Outlet />
      </div>
  );
}


export default App;