// routes/hotel.js
const express = require("express");
const router = express.Router();
const Hotel = require("../models/hotel");

// POST a new hotel
router.post("/", (req, res) => {
  const { name, description } = req.body;
  const newHotel = new Hotel({ name, description });

  newHotel
    .save()
    .then((hotel) => {
      res.status(201).json(hotel);
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to create a new hotel." });
    });
});

// GET all hotels
router.get("/", (req, res) => {
  Hotel.find({})
    .then((hotels) => {
      res.json(hotels);
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to fetch hotels." });
    });
});

module.exports = router;
