/* eslint-disable no-unused-vars */
import React from 'react';

const DashboardData = [
  { id: 1, title: "Product 1" },
  { id: 2, title: "Product 2" },
  { id: 3, title: "Product 3" },
];

const DashboardView = () => {
  return (
    <div>
      <h2>Dashboard View</h2>
      <p>Products list:</p>
      <ul>
        {DashboardData.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardView;
