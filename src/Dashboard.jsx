// import React from "react";
// import "./index.css";

// const Dashboard = () => {
//   return (
//     <div className="dashboard-container">
//       <h1>Dashboard</h1>
//       <div className="dashboard-section">
//         <h2>Welcome, User!</h2>
//         <p>Here you can track your auctions and bids.</p>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Dashboard = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/auctions") // Fetch auctions from backend
      .then((res) => res.json())
      .then((data) => setAuctions(data))
      .catch((error) => console.error("Error fetching auctions:", error));
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="dashboard-section">
        <h2>Welcome, User!</h2>
        <p>Here you can track your auctions and bids.</p>
      </div>

      <div className="auctions-list">
        {auctions.length === 0 ? (
          <p>No auctions available.</p>
        ) : (
          auctions.map((auction) => (
            <div key={auction._id} className="auction-card">
              <img src={auction.imageUrl} alt={auction.itemName} className="auction-image" />
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
