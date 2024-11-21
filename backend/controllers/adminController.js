const Admin = require('../models/adminModel')

const registerUser = async (req, res) => {
  const { username, password } = req.body

  try {
    const newAdmin = await Admin.signup()

    res.status(200).json({ username, newAdmin })
  }
  catch (error) {
    res.status(400).json({error: error.message })
  }

  res.json({mssg: 'signup user'})
}

const loginUser = async (req, res) => {
  res.json({mssg: 'login user'})
}

module.exports = { registerUser, loginUser }