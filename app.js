require('dotenv').config()
const express = require("express");
const app = express();
const bodyParser = require("body-parser")

const apiRoutes = require("./api");

app.use(bodyParser.json());

app.use("/api", apiRoutes);


app.listen(3000);
