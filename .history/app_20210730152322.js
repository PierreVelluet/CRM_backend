require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
const { nanoid } = require("nanoid");
const token = nanoid(48);
const cors = require("cors");
const maxAge = 1000 * 60 * 60 * 24;
const dbUri = process.env.DB_CONFIG;
const PORT = process.env.PORT || 5000;
// const {database} = require("./config/database");
//
// const { MongoClient } = require("mongodb");
// const uri = process.env.DB_CONFIG;
// const client = new MongoClient(uri, { useUnifiedTopology: true });
//
//   database("connect");

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

// app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(
    session({
        // name: "funhistoryToken",
        secret: token,
        resave: false,
        saveUninitialized: true,
        store: MongoStore.create({ mongoUrl: process.env.DB_CONFIG }),
        secure: false,
        cookie: { secure: false, maxAge: maxAge }
    })
);

app.use(passport.initialize());
app.use(passport.session());

console.log("app.js");

// app.use("/", (req, res, next) => {
//     console.log("headers:", req.headers)
//     console.log("cookies :", req.cookies)
//     console.log('Signed Cookies: ', req.signedCookies)
//     console.log("req.sessions is: ", req.session)
//     console.log("isAuth:",req.isAuthenticated())
//     next();
// })

app.use("/api", apiRoutes);

connect();

function listen() {
    if (app.get("env") === "test") return;
    app.listen(port);
    console.log("Express app started on port " + port);
}

function connect() {
    mongoose.connection
        .on("error", console.log)
        .on("disconnected", connect)
        .once("open", listen);
    return mongoose.connect(dbUri, {
        keepAlive: 1,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}
