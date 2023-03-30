/* eslint-disable consistent-return */
const router = require('express').Router();
const verify = require('../validation/verifyToken');
const Question = require('../models/Question');
const Answer = require('../models/Answer');

router.get('/', verify, async (req, res) => {
  try {
    const sortField = req.query.sortBy || 'date_posted';
    const sortOrder = req.query.sortOrder || 'desc';
    const sortQuery = { [sortField]: sortOrder === 'desc' ? -1 : 1 };
    const questions = await Question.find().sort(sortQuery).exec();
    res.send(questions);
  } catch (error) {
    res.status(500).send({ error });
  }
});

router.post('/', verify, async (req, res) => {
  try {
    const { _id: userId, username } = req.user;
    const question = new Question({
      question: req.body.question,
      user_id: userId,
      posted_by: username,
    });
    await question.save();
    res.send(question);
  } catch (error) {
    res.status(500).send({ error });
  }
});

router.patch('/:id', verify, async (req, res) => {
  try {
    const updatedQuestion = await Question.findOneAndUpdate(
      { _id: req.params.id, user_id: req.user._id },
      { $set: { question: req.body.question, edited: true } },
      { new: true },
    );
    if (!updatedQuestion) {
      return res.status(404).send({ error: 'Question not found' });
    }

    res.send(updatedQuestion);
  } catch (error) {
    res.status(500).send({ error });
  }
});

router.delete('/:id', verify, async (req, res) => {
  try {
    const deletedQuestion = await Question.findOneAndDelete({
      _id: req.params.id,
      user_id: req.user._id,
    });

    if (!deletedQuestion) {
      return res.status(404).send({ error: 'Question not found' });
    }

    res.send(deletedQuestion);
  } catch (error) {
    res.status(500).send({ error });
  }
});

router.get('/:id/answers', verify, async (req, res) => {
  try {
    const answers = await Answer.find({ question_id: req.params.id });
    res.send(answers);
  } catch (error) {
    res.status(500).send({ error });
  }
});

router.post('/:id/answers', verify, async (req, res) => {
  try {
    const { _id: userId, username } = req.user;
    const answer = new Answer({
      answer: req.body.answer,
      user_id: userId,
      posted_by: username,
      question_id: req.params.id,
    });
    await answer.save();
    res.send(answer);
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = router;
