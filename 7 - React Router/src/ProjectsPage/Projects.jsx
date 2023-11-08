import React from "react";
import Project from "./components/Project";
import { Outlet } from "react-router-dom";
import { projectsData } from "../data/projects_data";

const Projects = (props) => {
  return (
    <div className="projects">
      {projectsData.map((project) => {
        return <Project key={project.id} project={project} />;
      })}
      <Outlet />
    </div>
  );
};

export default Projects;
