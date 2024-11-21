const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const adminSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

adminSchema.statics.signup = async function(username, password) {
  // Validation
  if (!username || !password) {
    throw new Error("Username and password are required");
  }

  // Check if username is already taken
  const exists = await this.findOne({ username });
  if (exists) {
    throw new Error("Username already in use");
  }

  // salt and hash the password before storing in database
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  
  const newAdmin = await this.create({ username, password: hash })

  return newAdmin
}

module.exports=mongoose.model('admin', adminSchema)