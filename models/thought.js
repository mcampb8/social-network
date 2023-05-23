const mongoose = require('mongoose');
const dayjs = require('dayjs');

const reactionSchema = new mongoose.Schema({
    reactionId: {type: mongoose.Schema.Types.ObjectId, default: new mongoose.Schema.Types.ObjectId()},
    reactionBody: {type: String, required: true, maxLength: 280},
    username: {type: String, required: true},
    createdAt: {type: Date, default: Date.now, get: formatDate},
    lastAccessed: { type: Date, default: Date.now },
  });
const thoughtSchema = new mongoose.Schema({
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280},
    createdAt: {type: Date, default: Date.now, get: formatDate},
    username: {type: String, required: true},
    reactions: [reactionSchema],
    lastAccessed: { type: Date, default: Date.now },
  });
 
  const Thought = mongoose.model('Thought', thoughtSchema);
  function formatDate(date) {
    return dayjs(date).format("MMMM, DD, YYYY");
  }
  module.exports = Thought;