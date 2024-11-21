const Admin = require('../models/adminModel')

const registerUser = async (req, res) => {
  res.json({mssg: 'signup user'})
}

const loginUser = async (req, res) => {
  res.json({mssg: 'login user'})
}

module.exports = { registerUser, loginUser }