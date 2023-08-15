const mongoose = require("mongoose");

const paymentExpirySchema = new mongoose.Schema({
  $L: { type: String },
  $d: { type: Date },
});

const paymentSchema = new mongoose.Schema({
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  paymentExpiry: { type: String, required: true },
  paymentMode: { type: String, required: true },
  paymentName: { type: String, required: true },
  paymentNumber: { type: String, required: true },
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
