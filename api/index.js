const express = require("express");
const router = express.Router();

const usersRoute = require("./user");
const authRoute = require("./auth")

router.use('/user', usersRoute)
router.use('/auth', authRoute)

module.exports = router;
