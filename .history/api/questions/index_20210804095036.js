const express = require("express");
const router = express.Router();

const questions = require("../../services/questions");

//Create question
router.post("/", questions.create);

//Read all questions
router.get("/", questions.findAll);

// // Read all question
// router.get("/", countries.findAll);

// // Update a question by name
// router.post("/update/:name", countries.update);

// // Delete a question by name
// router.get("/delete/:name", countries.delete);

module.exports = router;
