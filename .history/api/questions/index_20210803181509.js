const express = require("express");
const router = express.Router();

const countries = require("../../services/questions");

//Create country
router.post("/", countries.create);

// Read country by name
router.get("/:name", countries.findByName);

// Read all country
router.get("/", countries.findAll);

// Update a country by name
router.post("/update/:name", countries.update);

// Delete a country by name
router.get("/delete/:name", countries.delete);

module.exports = router;
