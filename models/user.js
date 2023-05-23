const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true, trim: true },
    //need to validate email address
    email: {type: String, unique: true, required: true, validate: validator.isEmail},
    thoughts: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'thought',
        },
      ],
      friends: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user',
        },
      ],
    lastAccessed: { type: Date, default: Date.now },
  });
  // Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
  userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  });
  const User = mongoose.model('User', userSchema);

  module.exports = User;