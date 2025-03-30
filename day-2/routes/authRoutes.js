const express = require('express');
const router = express.Router();

const { signup, login } = require('../controllers/authControllers');

router.get('/', (req, res) => {
    res.render('landingpage.ejs');
});

router.post('/api/auth/signup', signup);
router.post('/api/auth/login', login);

module.exports = router;