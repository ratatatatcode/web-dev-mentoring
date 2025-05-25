const { auth, db } = require("../config/firebase");
const { createUserWithEmailAndPassword, signInWithEmailAndPassword, deleteUser } = require("firebase/auth");

exports.getLoginPage = (req, res) => {
    res.render("auth/login.ejs");
};

exports.getSignupPage = (req, res) => {
    res.render("auth/signup.ejs");
};

exports.getForgetPasswordPage = (req, res) => {
    res.render("auth/forgot-password.ejs");
};

exports.handleLogin = async (req, res) => {
    if (req.session.userId) return res.redirect("/todo");

    try {
        const { email, password } = req.body;
        if (!auth) throw new Error("Firebase Auth is not initialized.");

        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        req.session.userId = userCredential.user.uid;

        return res.status(200).json({
            success: true,
            message: "Log In successfully."
        });
    } catch (e) {
        let message = "An error occurred during login.";
        let statusCode = 400;

        if (
            e.code === "auth/wrong-password" ||
            e.code === "auth/wrong-email" ||
            e.code === "auth/invalid-credential"
        ) {
            statusCode = 401;
            message = "Invalid email or password.";
        }

        return res.status(statusCode).json({ success: false, message });
    }
}

exports.handleSignup = async (req, res) => {
    if (req.session.userId) return res.redirect("/todo");

    try {
        const { email, password, name } = req.body;
        if (!auth) throw new Error("Firebase Auth is not initialized.");

        await createUserWithEmailAndPassword(auth, email, password);

        return res.status(201).json({
            success: true,
            message: "User created successfully."
        });
    } catch (e) {
        let message = "An error occurred during registration.";

        if (e.code === "auth/email-already-in-use") {
            message = "The email address is already in use.";
        } else if (e.code === "auth/invalid-email") {
            message = "The email address is invalid.";
        } else if (e.code === "auth/weak-password") {
            message = "The password is too weak. It should be at least 6 characters.";
        }

        return res.status(400).json({ success: false, message });
    }
};

exports.handleAccountRecoveryWithEmail = async (req, res) => {
    try {
        const { email } = req.body;
        if (!auth) throw new Error("Firebase Auth is not initialized.");

        await sendPasswordResetEmail(auth, email);

        return res.status(200).json({
            success: true,
            message: "Password reset email sent."
        });
    } catch (e) {
        let message = "An error occured during account recovery.";
        let statusCode = 400;

        if (e.code === "auth/user-not-found") {
            statusCode = 404;
            message = "No user found with that email address."
        }

        return res.status(statusCode).json({ success: false, message });
    }
};

exports.handleLogout = (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ success: false, message: "Logout failed." });
    res.redirect("/");
  });
}