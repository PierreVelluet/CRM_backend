const express = require("express");
const router = express.Router();

const usersRoute = require("./user");
const authRoute = require("./auth")
const countriesRoute = require("./countries")
const questionsRoute = require("./questions")

router.use('/user', usersRoute)
router.use('/auth', authRoute)
router.use('/countries', countriesRoute)
router.use('/questions', questionsRoute)

module.exports = router;
