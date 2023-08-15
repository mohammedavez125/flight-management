// routes/flight.js
const express = require("express");
const router = express.Router();
const Payment = require("../models/payment");

// POST a new flight
router.post("/", (req, res) => {
  const {
    email,
    firstName,
    lastName,
    password,
    paymentExpiry,
    paymentMode,
    paymentName,
    paymentNumber,
  } = req.body;
  const newPayment = new Payment({
    email,
    firstName,
    lastName,
    password,
    paymentExpiry,
    paymentMode,
    paymentName,
    paymentNumber,
  });

  newPayment
    .save()
    .then((payment) => {
      res.status(201).json(payment);
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to create a new flight." });
    });
});

router.get("/", (req, res) => {
  Payment.find({})
    .then((payments) => {
      res.json(payments);
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to fetch payments." });
    });
});

module.exports = router;
