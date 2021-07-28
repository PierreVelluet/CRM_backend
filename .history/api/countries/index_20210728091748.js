const express = require("express");
const router = express.Router();

const { dbCall } = require("../../config/database");
const { getCountry, createCountry } = require("../../services/countries");

//Read country
router.get("/:name", async (req, res, next) => {
    console.log('/api/getCountry')
    const { name } = req.params;

    const result = await dbCall(getCountry, name).catch(console.error);
    res.status(200).json(result);
});

router.post("/", async (req, res, next) => {
  console.log('/api/createCountry')
  const { name } = req?.body;
  console.log('passed /create')

  const result = await dbCall(createCountry, name).catch(console.error);
  res.status(200).json(result);
});

module.exports = router;
