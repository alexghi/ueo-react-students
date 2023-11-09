import React from "react";
import { useNavigate } from "react-router-dom";

const Project = ({ project }) => {
  const { id, name } = project;
  const navigate = useNavigate();

  return (
    <div
      className="project"
      onClick={() => {
        navigate(`/projects/${id}`);
      }}
    >
      <h3>{name}</h3>
    </div>
  );
};

export default Project;
