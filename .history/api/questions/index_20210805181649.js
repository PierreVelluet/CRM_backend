const express = require("express");
const router = express.Router();

const questions = require("../../services/questions");

//Create question
router.post("/", questions.create);

//Read all questions by country name
router.get("/:country", questions.findAllByCountryName);

// // Read all question
router.get("/", questions.findAll);

// // Read X random questions
router.get("/random/::10", questions.findRandomQuestions);

// Update a question by id
router.post("/update/:id", questions.update);

// // Delete a question by id
router.get("/delete/:id", questions.delete);

// // Delete all question by country name
router.get("/deleteAll/:country", questions.deleteAllByCountry);

module.exports = router;
