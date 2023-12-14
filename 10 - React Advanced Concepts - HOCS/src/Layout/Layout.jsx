import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  let location = useLocation();
  const activeCls = "currently-active";

  return (
    <>
      <nav>
        <ul className="navbaritems">
          <li className={`${location.pathname === "/" ? activeCls : ""}`}>
            <Link to="/"> News </Link>
          </li>
          <li
            className={`${location.pathname === "/gallery" ? activeCls : ""}`}
          >
            <Link to="/gallery"> Gallery </Link>
          </li>
          <li
            className={`${location.pathname === "/example" ? activeCls : ""}`}
          >
            <Link to="/example"> Course Example </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
