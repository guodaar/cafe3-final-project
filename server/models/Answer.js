const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema(
  {
    answer: { type: String, default: null },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    question_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
      required: true,
    },
    date_posted: { type: Date, default: Date.now },
    posted_by: { type: String, required: true },
    edited: { type: Boolean, default: false },
  },
  { collection: 'answers' },
);

module.exports = mongoose.model('answer', answerSchema);
