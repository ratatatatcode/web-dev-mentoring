const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get("/", authController.getLoginPage);
router.get("/signup", authController.getSignupPage);
router.get("/recovery", authController.getForgetPasswordPage);

router.post("/api/auth/login", authController.handleLogin);
router.post("/api/auth/signup", authController.handleSignup);
router.post("/api/auth/forgot-password", authController.handleAccountRecoveryWithEmail);

module.exports = router;