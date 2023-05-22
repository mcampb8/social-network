const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText: { type: String, unique: true, minLength: 1, maxLength: 280},
    createdAt: {},
    username: {},
    reactions: {},
    lastAccessed: { type: Date, default: Date.now },
  });
  const reactionSchema = new mongoose.Schema({
    reactionId: {},
    reactionBody: {type: String, required: true, maxLength: 280},
    username: {type: String, required: true},
    createdAt: {},
    lastAccessed: { type: Date, default: Date.now },
  });
  const Thought = mongoose.model('User', userSchema);
  module.exports = Thought;