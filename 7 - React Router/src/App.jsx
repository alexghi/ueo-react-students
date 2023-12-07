import "./App.css";
import { Routes, Route, Link, Outlet, useLocation } from "react-router-dom";
import About from "./AboutPage";
import Resume from "./ResumePage";
import Projects from "./ProjectsPage";
import ProjectDetails from "./ProjectsPage/components/ProjectDetails";

// ** BIO
// react router examples - https://github.com/remix-run/react-router/tree/main/examples
// nested routes - https://dev.to/tywenk/how-to-use-nested-routes-in-react-router-6-4jhd
// ** */

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<About />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/projects" element={<Projects />}>
                        <Route path=":projectId" element={<ProjectDetails />} />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

function Layout() {
    let location = useLocation();
    console.log(location)
    const activeCls = "currently-active";

    return (
        <div>
            <nav>
                <ul className="navbaritems">
                    <li className={`${location.pathname === "/" ? activeCls : ""}`}>
                        <Link to="/"> About </Link>
                    </li>
                    <li className={`${location.pathname === "/resume" ? activeCls : ""}`}>
                        <Link to="/resume"> Resume </Link>
                    </li>
                    <li
                        className={`${location.pathname === "/projects" ? activeCls : ""}`}
                    >
                        <Link to="/projects"> Projects </Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

// function _App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <About />,
//     },
//     {
//       path: "/resume",
//       element: <Resume />,
//     },
//     {
//       path: "/projects",
//       element: <Projects />,
//     },
//   ]);

//   return <RouterProvider router={router} />;
// }

export default App;
