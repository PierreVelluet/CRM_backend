const express = require("express");
const router = express.Router();

const usersRoute = require("./user");

router.use('/user', usersRoute)

module.exports = router;
