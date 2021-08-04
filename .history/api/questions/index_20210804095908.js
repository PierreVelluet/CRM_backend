const express = require("express");
const router = express.Router();

const questions = require("../../services/questions");

//Create question
router.post("/", questions.create);

//Read all questions by country name
router.get("/:country", questions.findAllByCountryName);

router.get("/:country", questions.findAllByCountryName);

// // Read all question
// router.get("/", countries.findAll);

// Update a question by name
router.post("/update/:name", questions.update);

// // Delete a question by name
// router.get("/delete/:name", countries.delete);

module.exports = router;
