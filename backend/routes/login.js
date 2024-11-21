require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const Admin = require('../models/adminModel');

const router = express.Router();

const { registerUser, loginUser } = require('../controllers/loginController')

router.post('/register', registerUser)

router.post('/login', loginUser)

module.exports = router;
