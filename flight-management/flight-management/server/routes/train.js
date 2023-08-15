// routes/train.js
const express = require("express");
const router = express.Router();
const Train = require("../models/train");

// POST a new train
router.post("/", (req, res) => {
  const { name, description } = req.body;
  const newTrain = new Train({ name, description });

  newTrain
    .save()
    .then((train) => {
      res.status(201).json(train);
    })
    .catch((err) => {
      console.error("Error creating a new user:", err);
      res.status(500).json({ error: "Failed to create a new user." });
    });
});

// GET all trains
router.get("/", (req, res) => {
  Train.find({})
    .then((trains) => {
      res.json(trains);
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to fetch trains." });
    });
});

module.exports = router;
