// index.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 8000; // Use the PORT from .env or default to 3000

// Connect to the MongoDB Atlas cluster
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
  });

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
// Load the Mongoose models
require("./models/flight");
require("./models/train");
require("./models/hotel");
require("./models/user");
require("./models/payment");

// Flight routes
const flightRoutes = require("./routes/flight");
app.use("/flights", flightRoutes);

// Train routes
const trainRoutes = require("./routes/train");
app.use("/trains", trainRoutes);

// Hotel routes
const hotelRoutes = require("./routes/hotel");
app.use("/hotels", hotelRoutes);

// User routes
const userRoutes = require("./routes/user");
app.use("/users", userRoutes);

const paymentRoutes = require("./routes/payment");
app.use("/payment", paymentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
