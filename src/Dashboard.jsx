import React from "react";
import "./index.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="dashboard-section">
        <h2>Welcome, User!</h2>
        <p>Here you can track your auctions and bids.</p>
      </div>
    </div>
  );
};

export default Dashboard;