

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./index.css";

const Dashboard = () => {
  const [auctions, setAuctions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const res = await axios.get("http://localhost:5000/auctions");
        setAuctions(res.data); // Store fetched auctions
      } catch (error) {
        setError("Failed to load auctions. Try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchAuctions();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="dashboard-section">
        <h2>Welcome, User!</h2>
        <p>Here you can track your auctions and bids.</p>
      </div>

      {loading && <p>Loading auctions...</p>}
      {error && <p className="error">{error}</p>}

      <div className="auctions-list">
        {auctions.length === 0 && !loading ? (
          <p>No auctions available.</p>
        ) : (
          auctions.map((auction) => (
            <div key={auction._id} className="auction-card">
              <img src={auction.image} alt={auction.itemName} className="auction-image" />
              <h3>{auction.itemName}</h3>
              <p>Starting Price: ₹{auction.startingPrice}</p>
              <Link to={`/auction/${auction._id}`}>
                <button className="auction-button">Go For It</button>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;