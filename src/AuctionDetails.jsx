import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AuctionDetails = () => {
  const { id } = useParams(); // Get auction ID from URL
  const [auction, setAuction] = useState(null);

  useEffect(() => {
    console.log("Auction ID from url",id);
    fetch(`http://localhost:5000/auctions/${id}`) // Fetch auction data from backend
      .then((res) => res.json())
      .then((data) => setAuction(data))
      .catch((error) => console.error("Error fetching auction:", error));
  }, [id]);

  if (!auction) return <p>Loading...</p>;

  return (
    <div>
      <h1>{auction.itemName}</h1>
      <img src={auction.imageUrl} alt={auction.itemName} style={{ width: "300px" }} />
      <p>Starting Price: ₹{auction.startingPrice}</p>
      <p>Auction ID: {auction._id}</p>
    </div>
  );
};

export default AuctionDetails;
