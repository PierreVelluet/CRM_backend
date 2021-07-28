const express = require("express");
const router = express.Router();

const { dbCall } = require("../../config/database");
const { getCountry } = require("../../services/countries");

//Read user
router.get("/:name", async (req, res, next) => {
    const { name } = req?.params;

    const result = await dbCall(getCountry, name).catch(console.error);
    res.status(200).json(result);
});

router.post("/create", async (req, res, next) => {
  const small = new Tank({ size: 'small' });
small.save(function (err) {
  if (err) return handleError(err);
  // saved!
});
  const result = await dbCall(getCountry, name).catch(console.error);
  res.status(200).json(result);
});

module.exports = router;
