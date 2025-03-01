

import React, { useState } from "react";
import axios from "axios";
import "./index.css";

const PostAuction = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    startingPrice: "",
    image: "",
  });

  const [message, setMessage] = useState(""); // Success/Error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auction", formData);
      setMessage("Auction posted successfully!");
      setFormData({ itemName: "", startingPrice: "", imageUrl: "" });
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to post auction. Try again.");
    }
  };

  return (
    <div className="post-auction-container">
      <h2>Post an Auction</h2>
      {message && <p className="message">{message}</p>} {/* Show success/error message */}
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="itemName"
          placeholder="Enter Item Name"
          value={formData.itemName}
          onChange={handleChange}
          required
        />
        <label>Price</label>
        <input
          type="text"
          name="startingPrice"
          placeholder="Enter Starting Price"
          value={formData.startingPrice}
          onChange={handleChange}
          required
        />
        <label>Image Link</label>
        <input
          type="text"
          name="imageUrl"
          placeholder="Enter Image URL"
          value={formData.imageUrl}
          onChange={handleChange}
        />
        <button type="submit">Submit Auction</button>
      </form>
    </div>
  );
};

export default PostAuction;