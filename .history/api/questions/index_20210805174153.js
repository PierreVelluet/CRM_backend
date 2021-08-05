const express = require("express");
const router = express.Router();

const questions = require("../../services/questions");

//Create question
router.post("/", questions.create);

//Read all questions by country name
router.get("/:country", questions.findAllByCountryName);

// // Read all question
router.get("/", questions.findAll);

// Update a question by id
router.post("/update/:id", questions.update);

// // Delete a question by id
router.get("/delete/:name", questions.delete);

module.exports = router;
