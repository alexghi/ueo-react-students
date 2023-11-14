import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const handleLogin = () => {
        if(user === 'user' && pass === 'pass'){
            localStorage.setItem('user', user);
            localStorage.setItem('pass', pass);
            navigate("/Dashboard", { replace: true, });
        }
        else{
            alert('Wrong user or password');
        }
    }

    return (
        <div>
            <h1>This is Login</h1>
            <button onClick={() => navigate("/", { replace: true, })}>Back to landing</button>
                <div style={{display: 'flex', flexDirection: "column", padding: "20px", margin: "20px"}}>
                <input value={user} onChange={e => {setUser(e.target.value)}} type="text" placeholder='user' />
                <input value={pass} onChange={e => {setPass(e.target.value)}} type="text" placeholder='pass' />
            </div>
            <button onClick={()=>handleLogin()}>Log in</button>
        </div>
    );
};

export default Login;
