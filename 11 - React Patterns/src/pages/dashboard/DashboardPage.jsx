import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const DashboardPage = (props) => {
  const navigate = useNavigate();
  const { state: locationState } = useLocation();
  const authenticated = locationState?.authenticated;

  useEffect(() => {
    if (!authenticated) {
      navigate("/login");
    }
  }, [authenticated]);
  return (
    <div>
      <div>left side</div>
      <div>right side</div>
    </div>
  );
};

export default DashboardPage;
