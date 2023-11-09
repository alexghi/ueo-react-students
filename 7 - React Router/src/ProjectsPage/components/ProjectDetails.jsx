import React from "react";
import { useParams } from "react-router-dom";
import { getProjectWithId } from "../../data/projects_data";

const ProjectDetails = () => {
  const params = useParams();

  const selectedProject = getProjectWithId(params.projectId);

  return (
    <div>
      Selected project: {selectedProject.name} - {selectedProject.description}
    </div>
  );
};

export default ProjectDetails;
