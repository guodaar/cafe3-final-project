const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema(
  {
    title: { type: String, default: null, required: true },
    question: { type: String, default: null, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date_posted: { type: Date, default: Date.now },
    posted_by: { type: String, required: true },
    edited: { type: Boolean, default: false },
  },
  {
    collection: 'questions',
    toJSON: { virtuals: true },
    id: false,
  },
);

questionSchema.virtual('answer_count', {
  ref: 'Answer',
  localField: '_id',
  foreignField: 'question_id',
  count: true,
});

module.exports = mongoose.model('Question', questionSchema);
