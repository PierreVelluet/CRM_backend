require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo");
const { nanoid } = require("nanoid");
const token = nanoid(48);
const cors = require("cors");
// variables
const maxAge = 1000 * 60 * 60 * 24;
// Relative imports
const passport = require("./passport/setup");
const apiRoutes = require("./api");
const { connect } = require("./config/database");

const app = express();

// app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Authentification's middlewares.
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

app.use("/api", apiRoutes);

connect(app);
