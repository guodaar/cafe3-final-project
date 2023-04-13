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

router.patch('/:id/vote', verify, async (req, res) => {
  try {
    const updatedAnswer = await Answer.findOneAndUpdate(
      { _id: req.params.id },
      { vote: req.body.vote },
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

module.exports = router;
