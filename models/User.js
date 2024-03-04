const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  role:{type: String, required: true,undefined:'user' }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
