require("dotenv").config();
const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");

const passport = require("./passport/setup");

const app = express();

const apiRoutes = require("./api");

mongoose
    .connect(process.env.DB_CONFIG, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
    session({
        secret: "very secret this is",
        resave: false,
        saveUninitialized: true,
        store: MongoStore.create({ mongoUrl: process.env.DB_CONFIG })
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", apiRoutes);

app.listen(3000);
