require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

const { registerUser, loginUser } = require('../controllers/adminController')

router.post('/register', registerUser)

router.post('/login', loginUser)

module.exports = router;
