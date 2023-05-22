const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true, trim: true },
    //need to validate email address
    email: {type: String, unique: true, required: true,},
    thoughts: {},
    friends: {},
    lastAccessed: { type: Date, default: Date.now },
  });
  // Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
  const User = mongoose.model('User', userSchema);

  module.exports = User;