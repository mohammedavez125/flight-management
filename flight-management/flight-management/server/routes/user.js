// routes/user.js
const express = require("express");
const router = express.Router();
const User = require("../models/user");

// POST a new user
router.post("/", (req, res) => {
  // Extract the 'name' and 'email' from the request body
  const { name, email } = req.body;

  // Create a new 'User' instance using the 'name' and 'email'
  const newUser = new User({ name, email });

  // Save the new user to the database
  newUser
    .save()
    .then((user) => {
      // If the user is successfully saved, respond with the user data and status 201 (Created)
      res.status(201).json(user);
    })
    .catch((err) => {
      // If there's an error during the save operation, respond with an error and status 500 (Internal Server Error)
      res.status(500).json({ error: "Failed to create a new user." });
    });
});

// GET all users
router.get("/", (req, res) => {
  User.find({})
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.error("Error creating a new user:", err);
      res.status(500).json({ error: "Failed to create a new user." });
    });
});

module.exports = router;
