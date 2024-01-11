import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./pages/login/LoginPage";
import { Outlet, Routes, Route, Link, useLocation } from "react-router-dom";
import DashboardPage from "./pages/dashboard/DashboardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

const Layout = () => {
  let location = useLocation();
  const activeCls = "currently-active";

  return (
    <div>
      <nav>
        <ul className="navbaritems">
          <li className={`${location.pathname === "/" ? activeCls : ""}`}>
            <Link to="/"> Login </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
