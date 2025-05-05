const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("auth/login.ejs");
});

router.get("/signup", (req, res) => {
    res.render("auth/signup.ejs");
});

router.get("/recovery", (req, res) => {
    res.render("auth/forgot-password.ejs");
});

module.exports = router;