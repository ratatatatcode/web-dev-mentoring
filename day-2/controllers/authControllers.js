const { auth } = require('../config/firebase');
const { createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('firebase/auth');

exports.signup = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!auth) {
            throw new Error('Firebase Auth is not initialized.');
        }

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        const user = userCredential.user;
        console.log(user);

        return res.status(201).json({
            message: 'User created successfully',
        });
    } catch (e) {
        console.log(e.message);
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!auth) {
            throw new Error('Firebase Auth is not initialized.');
        }

        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        return res.status(200).json({
            message: 'Login successfully',
        });

    } catch (e) {
        console.log('Login Error:', e);
        res.status(500).json({ error: e.message });
    }
}