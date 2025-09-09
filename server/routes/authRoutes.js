const express = require('express');
const router = express.Router();
const { signup, login, home } = require('../controllers/authController');

router.post('/signup', signup);
router.post('/login', login);
router.post('/', home);

module.exports = router;
