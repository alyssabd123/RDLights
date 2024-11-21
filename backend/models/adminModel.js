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

adminSchema.statics.signup = async (username, password) => {
  
  // salt and hash the password before storing in database
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  
  const newAdmin = await this.create({ username, password: hash })

  return newAdmin
}

module.exports=mongoose.model('admin', adminSchema)