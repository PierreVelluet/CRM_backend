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

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use(
    session({
        // name: "funhistoryToken",
        secret: token,
        resave: false,
        saveUninitialized: true,
        store: MongoStore.create({ mongoUrl: process.env.DB_CONFIG }),
        secure: false,
        cookie: { secure: false, maxAge: maxAge },
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", (req, res, next) => {
    console.log(req.cookies)
    console.log("isAuth:",req.isAuthenticated())
    next();
})

app.use("/api", apiRoutes);

app.listen(5000);
