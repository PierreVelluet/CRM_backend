const express = require("express");
const router = express.Router();

const { dbCall } = require("../../config/database");
const countries = require("../../services/countries");

//Create country
router.post("/", countries.create);

// Retrieve a single Tutorial with name
router.get("/:name", countries.findOne);


module.exports = router;
