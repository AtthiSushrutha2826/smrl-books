const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json()); // for parsing application/json

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/bookstore", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check connection
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
