// models/flight.js
const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model("Flight", flightSchema);
