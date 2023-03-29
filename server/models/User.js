const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: { type: String, default: null },
    email: { type: String, unique: true },
    password: { type: String },
  },
  { collection: 'users' },
);

module.exports = mongoose.model('user', userSchema);
