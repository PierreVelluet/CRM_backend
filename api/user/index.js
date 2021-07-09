const express = require("express");
const router = express.Router();

const { dbCall } = require("../../config/database");
const { getUser } = require("../../services/user");

router.get("/:name", async (req, res, next) => {
  const name = req?.params?.name || "";
  
  const result =  await dbCall(getUser, name).catch(console.error);
  console.log(result)
  res.status(200).json(result)

});

module.exports = router;
