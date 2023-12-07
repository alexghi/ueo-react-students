import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Settings = () => {
    const navigate = useNavigate();
    const [settings, setSettings] = useState({
        "accountSettings": {
            "username": "example_user",
            "email": "user@example.com",
            "notifications": {
                "email": true,
                "push": false
            },
            "theme": "dark",
            "language": "en",
            "security": {
                "twoFactorAuthentication": true,
                "passwordChangeRequired": false
            }
        }
    });

    const AccountSettings = ({ accountSettings }) => {
        return (
            <div>
                <h2>Account Settings</h2>
                <ul>
                    {Object.entries(accountSettings).map(([key, value]) => (
                        <li key={key}>
                            <strong>{key}:</strong> {JSON.stringify(value)}
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    console.log(settings);
    const goBackToAccount = () => {
        navigate('/Dashboard', { replace: true });
    }


    return (
        <div>
            <h1>Here are the settings for your account</h1>
            <AccountSettings accountSettings={settings}/>
            <button onClick={() => goBackToAccount()}>Go back to account</button>
        </div>
    );
};

export default Settings;
