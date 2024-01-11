import React from "react";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(false);

  const onUserNameChange = useCallback(
    (ev) => {
      setUser({
        ...user,
        name: ev.target.value,
      });
    },
    [setUser, user]
  );

  const onPasswordChange = useCallback(
    (ev) => {
      setUser({
        ...user,
        password: ev.target.value,
      });
    },
    [setUser, user]
  );

  const onLoginBtnClick = useCallback(async () => {
    setLoading(true);
    setTimeout(() => {
      Promise.resolve({
        authenticated: true,
        token: "123456",
      });
      setLoading(false);
      navigate("/", {
        state: {
          authenticated: true,
          token: "123456",
          user: {
            name: user,
          },
        },
      });
    }, 2000);
    // todo
    // redirecta catre pagina de dashboard
    // merge catre "server" cu datele de login
    // primeste de la server un token
    // o data ce token-ul exista, putem sa mergem la dashboard
  }, [setLoading, user]);

  return (
    <>
      <div>
        <label>Username</label>
        <input type="text" value={user.name} onChange={onUserNameChange} />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={user.password}
          onChange={onPasswordChange}
        />
      </div>
      <button onClick={onLoginBtnClick} disabled={isLoading}>
        Login
      </button>
      {isLoading ? <div>logging you in now</div> : null}
    </>
  );
};

export default LoginPage;
