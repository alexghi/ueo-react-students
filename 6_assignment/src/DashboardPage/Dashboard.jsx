import {Link} from "react-router-dom";
const Dashboard = () => {

    return (
      <div>
        <div>
        <Link to="/dashboard/settings"> Settings </Link>
        </div>
        <p>
        Dashboard page.
        </p>
      </div>
    );
  };
  
  export default Dashboard;