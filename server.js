require("dotenv").config();  // Load environment variables
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");  // Import MongoDB connection function

const app = express();

// Middleware
app.use(express.json());  // Enable JSON parsing
app.use(cors());          // Enable CORS for frontend-backend communication

// Connect to MongoDB
connectDB();

// Simple API route
app.get("/", (req, res) => {
  res.send("TrekTrackers API is Running!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
d