const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema(
  {
    question: { type: String, default: null },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date_posted: { type: Date, default: Date.now },
    posted_by: { type: String, required: true },
    edited: { type: Boolean, default: false },
  },
  { collection: 'questions' },
);

module.exports = mongoose.model('question', questionSchema);
