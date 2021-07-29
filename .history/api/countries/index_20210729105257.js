const express = require("express");
const router = express.Router();

const { dbConnection } = require("../../config/database");
const countries = require("../../services/countries");

//Create country
router.post("/", countries.create);

// Retrieve a single Tutorial with name
router.get("/:name",(req, res) => {
  
});

module.exports = router;
