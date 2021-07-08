const express = require("express");
const http = require("http");
const app = express();

const apiRoutes = require("./api/index");

app.use("/api", apiRoutes);

app.use((req, res, next) => {
  res.send("<h1>La page n'as pas pu être trouvée !</h1>");
});

const server = http.createServer(app);

server.listen(3000);
