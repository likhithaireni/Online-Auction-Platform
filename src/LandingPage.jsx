// export default LandingPage;
import React from "react";
import { Link } from "react-router-dom";
import mustangImage from "./assets/mustang-gt.jpg";
import RolexWatchImage from "./assets/rolexwatch.jpg";
import applemacbook from "./assets/applemacbook.jpg";
import harleydavidson from "./assets/harleydavidson.jpg";
import "./index.css"; 

const auctions = [
  {
    id: 1,
    name: "Apple MacBook Pro 2022",
    image: applemacbook,
    price: "$850",
  },
  {
    id: 2,
    name: "Luxury Rolex Watch",
    image: RolexWatchImage,
    price: "$1,500",
  },
  {
    id: 3,
    name: "Ford Mustang GT",
    image: mustangImage,
    price: "$25,000",
  },
  {
    id: 4,
    name: "Harley-Davidson X400",
    image: harleydavidson,
    price: "$20,222",
  },
];

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">    Online Auction</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/postAuction">PostAuction</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to the Online Auction</h1>
        <p>Bid, Buy, and Sell with Ease!</p>
        <div className="auction-list">
        {auctions.map((item) => (
          <div key={item.id} className="auction-item">
            <img src={item.image} alt={item.name} className="auction-image"/>
            <h3>{item.name}</h3>
            <p>Starting price: {item.price}</p>
            <button className="bid-btn">Go for it</button>
          </div>
        ))} 
      </div>
      </div>
      

    </div>
    
  );
};

export default LandingPage;