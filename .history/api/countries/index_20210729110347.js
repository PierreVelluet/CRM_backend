const express = require("express");
const router = express.Router();

const { dbConnection } = require("../../config/database");
const {findOne} = require("../../services/countries");

//Create country
// router.post("/", countries.create);

// Retrieve a single Tutorial with name
router.get("/:name",(req, res) => {
  console.log(req.params.name)
  dbConnection(findOne)
});

module.exports = router;
