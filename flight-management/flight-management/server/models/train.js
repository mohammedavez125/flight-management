// models/train.js
const mongoose = require("mongoose");

const trainSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model("Train", trainSchema);
