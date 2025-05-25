require('dotenv').config();
const express = require("express");
const app = express();
const session = require("express-session");
const path = require("path");
const authRoutes = require("./routes/authRoutes");

app.use(
    session ({
        secret: process.env.SECRET_SESSION_KEY,
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false }
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/", authRoutes);

PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`);
});