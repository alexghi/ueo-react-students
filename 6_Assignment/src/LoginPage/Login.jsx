
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;

    if (username === "Iulia" && password === "123") {
      navigate("/dashboard");
    } else {
      alert("Autentificare eșuată. Te rog încercă din nou.");
    }
    navigate("/dashboard");
  };

  return (
    <div className="Login">
      <h2>Login Page</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Nume de utilizator" />
        <input type="password" placeholder="Parolă" />
        <button type="submit">Autentificare</button>
      </form>
    </div>
  );
};

export default Login;
