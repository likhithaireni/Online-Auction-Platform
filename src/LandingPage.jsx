
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./index.css"; 

const LandingPage = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/auctions") 
      .then((res) => setAuctions(res.data))
      .catch((err) => console.error("Error fetching auctions:", err));
  }, []);

  return (
    <div className="landing-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">Online Auction</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/postAuction">Post Auction</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to the Online Auction</h1>
        <p>Bid, Buy, and Sell with Ease!</p>
        <div className="auction-list">
          {auctions.length === 0 ? (
            <p>No auctions available.</p>
          ) : (
            auctions.map((item) => (
              <div key={item._id} className="auction-item">
                <img src={item.imageUrl} alt={item.itemName} className="auction-image"/>
                <h3>{item.itemName}</h3>
                <p>Starting price: ₹{item.startingPrice}</p>
                <button className="bid-btn">
                  <Link to={`/auction/${item._id}`} style={{ textDecoration: "none", color: "white" }}>
                    Go for it
                  </Link>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;