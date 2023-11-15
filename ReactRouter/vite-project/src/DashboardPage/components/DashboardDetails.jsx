import React from "react";
import { useParams } from "react-router-dom";
import { getDashboardWithId } from "../../data/data";

const DashboardDetails = () => {
  const params = useParams();

  const selectedDashboard = getDashboardWithId(params.dashboardId);

  return (
    <div>
      Selected dashboard: {selectedDashboard.name} - {selectedDashboard.description}
    </div>
  );
};

export default DashboardDetails;
