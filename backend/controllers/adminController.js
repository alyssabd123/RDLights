const Admin = require('../models/adminModel')

const registerUser = async (req, res) => {
  const { username, password } = req.body

  try {
    const newAdmin = await Admin.signup(username, password)

    res.status(200).json({ username, newAdmin })
  }
  catch (error) {
    res.status(400).json({error: error.message})
  }
}

const loginUser = async (req, res) => {
  res.json({mssg: 'login user'})
}

module.exports = { registerUser, loginUser }