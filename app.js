const express = require("express");
const http = require("http")
const app = express();

const apiRoutes = './api/index';


app.use(apiRoutes);

const server = http.createServer(app);

server.listen(3000);
