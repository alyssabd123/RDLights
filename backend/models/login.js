const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const credentialsSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})
// Hash the password before saving the user
credentialsSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare the entered password with the hashed password
credentialsSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports=mongoose.model('Credentials', credentialsSchema)