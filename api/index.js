const express = require("express");
const router = express.Router();

const usersRoute = require("./user");
const authRoute = require("./auth")
const countriesRoute = require("./countries")

router.use('/user', usersRoute)
router.use('/auth', authRoute)
router.use('/countries', countriesRoute)

module.exports = router;
