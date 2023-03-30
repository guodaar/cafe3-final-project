const router = require('express').Router();
const verify = require('../validation/verifyToken');
const Answer = require('../models/Answer');

router.patch('/:id', verify, async (req, res) => {
  try {
    const updatedAnswer = await Answer.findOneAndUpdate(
      { _id: req.params.id },
      { answer: req.body.answer, edited: true },
      { new: true },
    );

    res.send(updatedAnswer);
  } catch (error) {
    res.status(500).send({ error });
  }
});

router.delete('/:id', verify, async (req, res) => {
  try {
    const deletedAnswer = await Answer.findByIdAndDelete(req.params.id);
    res.send(deletedAnswer);
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
