require('dotenv').config()
const express = require("express");
const app = express();

const apiRoutes = require("./api");

app.use("/api", apiRoutes);


app.listen(3000);
