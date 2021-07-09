const express = require("express");
const router = express.Router();

const { dbCall } = require("../../config/database");
const { getUser } = require("../../services/users");

router.use("/", (req, res, next) => {
  dbCall(getUser, "Constance").catch(console.error);
});

module.exports = router;
