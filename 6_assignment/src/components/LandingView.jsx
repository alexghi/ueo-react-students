import React from 'react';
import { useNavigate, Routes, Route, } from 'react-router-dom';

function Landing() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Helcome aboard</h1>
            <button onClick={() => navigate("/login", {replace: true,})}>Go to Login</button>
        </div>
    );
}

export default Landing;
