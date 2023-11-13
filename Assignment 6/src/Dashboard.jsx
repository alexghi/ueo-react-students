// Dashboard.js
import React, { useEffect, useState } from 'react';

const Dashboard = ({ username }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Încărcați datele din fișierul JSON
    fetch('/data.json')
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error('Error fetching data', error));
  }, []);

  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <p>This is the dashboard.</p>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
