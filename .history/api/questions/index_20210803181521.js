const express = require("express");
const router = express.Router();

const questions = require("../../services/questions");

//Create question
router.post("/", countries.create);

// Read question by name
router.get("/:name", countries.findByName);

// Read all question
router.get("/", countries.findAll);

// Update a question by name
router.post("/update/:name", countries.update);

// Delete a question by name
router.get("/delete/:name", countries.delete);

module.exports = router;
