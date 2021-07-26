const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/isAuthenticated", (req, res, next) => {
    // console.log(req.isAuthenticated())
    // console.log('passed in isAuthRoute')
    console.log("isAuthenticatedRoute:", req.isAuthenticated())
})

router.post("/register_login", (req, res, next) => {
    console.log(req?.body);
    passport.authenticate("local", function (err, user, info) {
        if (err) {
            return res.status(400).json({ errors: err });
        }
        if (!user) {
            return res.status(400).json({ errors: "No user found" });
        }
        req.logIn(user, function (err) {
            if (err) {
                return res.status(400).json({ errors: err });
            }
            // return res.status(200).json({
            //     user: {
            //         name: user?.name,
            //         email: user?.email
            //     }
            // });
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8010/proxy');
            return res.redirect("/")
        });
    })(req, res, next);
});

module.exports = router;
