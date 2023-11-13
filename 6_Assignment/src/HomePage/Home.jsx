import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <h2>Home Page</h2>
      <p>Welcome! Please <Link to="/login">log in</Link>.</p>
    </div>
  );
};

export default Home;