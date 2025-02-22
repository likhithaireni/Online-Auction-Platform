// export default Auction;
import React, { useState } from "react";
import "./index.css";

const PostAuction = () => {
  const [itemName, setItemName] = useState("");
  const [startingPrice, setStartingPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Auction posted for ${itemName} at ${startingPrice}');
    setItemName("");
    setStartingPrice("");
    setImage("");
  };

  return (
    <div className="post-auction-container">
      <h2>Post an Auction</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder=" Enter Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          required
        />
        <label>Price</label>
        <input
          type="text"
          placeholder="Enter Starting Price"
          value={startingPrice}
          onChange={(e) => setStartingPrice(e.target.value)}
          required
        />
        <label>Image Link</label>
        <input
          type="text"
          placeholder="Enter Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Submit Auction</button>
      </form>
    </div>
  );
};

export default PostAuction;