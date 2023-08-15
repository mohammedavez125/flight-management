// routes/flight.js
const express = require("express");
const router = express.Router();
const Flight = require("../models/flight");

// POST a new flight
router.post("/", (req, res) => {
  const { name, description } = req.body;
  const newFlight = new Flight({ name, description });

  newFlight
    .save()
    .then((flight) => {
      res.status(201).json(flight);
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to create a new flight." });
    });
});

// GET all flights
router.get("/", (req, res) => {
  Flight.find({})
    .then((flights) => {
      res.json(flights);
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to fetch flights." });
    });
});

module.exports = router;
