const express = require("express");
const router = express.Router();

const { dbCall } = require("../../config/database");
const countries = require("../../services/countries");

//Read country
router.post("/", countries.create);

// Retrieve a single Tutorial with name
router.get("/:name", countries.findOne);


router.post("/create", async (req, res, next) => {
  console.log('/api/createCountry')
  const { name } = req?.body;

  const result = await dbCall(createCountry, name).catch(console.error);
  res.status(200).json(result);
});

module.exports = router;
