const express = require("express");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const connectDB = require("./db");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// User Schema & Model
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});
const User = mongoose.model("User", userSchema);

// Auction Schema & Model
const auctionSchema = new mongoose.Schema({
  itemName: String,
  startingPrice: Number,
  imageUrl: String,
  createdAt: { type: Date, default: Date.now },
});
const Auction = mongoose.model("Auction", auctionSchema);

// Signup Route
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    if (await User.findOne({ email })) {
      return res.status(400).json({ error: "Email already in use" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "Signup successful!" });
  } catch (error) {
    res.status(500).json({ error: "Signup failed!", details: error.message });
  }
});

// Signin Route
app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.json({ message: "Signin successful!", userId: user._id });
  } catch (error) {
    res.status(500).json({ error: "Signin failed!", details: error.message });
  }
});

// Post Auction Route
app.post("/auction", async (req, res) => {
  try {
    const { itemName, startingPrice, imageUrl } = req.body;
    if (!itemName || !startingPrice || !imageUrl) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const newAuction = new Auction({ itemName, startingPrice, imageUrl });
    await newAuction.save();
    res.status(201).json({ message: "Auction posted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to post auction!", details: error.message });
  }
});

// Get All Auctions Route
app.get("/auctions", async (req, res) => {
  try {
    const auctions = await Auction.find();
    res.json(auctions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch auctions!", details: error.message });
  }
});

// Bid on Auction
app.post("/bid/:id", async (req, res) => {
  try {
    const { bidAmount } = req.body;
    const auction = await Auction.findById(req.params.id);

    if (!auction) {
      return res.status(404).json({ error: "Auction not found!" });
    }

    if (bidAmount <= auction.startingPrice) {
      return res.status(400).json({ error: "Bid must be higher than starting price!" });
    }

    auction.startingPrice = bidAmount; // Update the auction price
    await auction.save();

    res.json({ message: "Bid placed successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to place bid!" });
  }
});

// Get Single Auction
app.get("/auctions/:id", async (req, res) => {
  try {
    const auction = await Auction.findById(req.params.id);
    if (!auction) {
      return res.status(404).json({ error: "Auction not found!" });
    }
    res.json(auction);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch auction!" });
  }
});


// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
