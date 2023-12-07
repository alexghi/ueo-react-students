import { useNavigate } from 'react-router-dom';

function Dashboard(props) {
    const navigate = useNavigate();
    const user = localStorage.getItem('user');
    const pass = localStorage.getItem('pass');
    console.log(user, pass);
    if (user === undefined || pass === undefined) {
        
    }
    const clearStore = () => {
        localStorage.clear();
        navigate('/Login', { replace: true });
    }
    const navigateToSettings = () => {
        navigate('/Settings', { replace: true });
    }

    return (
        <>
            {user && pass ? (
                <div>
                    <h1>Welcome: "{user}" <br /> with password: "{pass}"</h1>
                    <button onClick={()=>clearStore()}>Log out</button>
                    <button onClick={()=>navigateToSettings()}>Settings</button>
                </div>
            ) : ''}
        </>
    );
}

export default Dashboard;
