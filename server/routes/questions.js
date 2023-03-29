const { MongoClient } = require('mongodb');
const router = require('express').Router();
const verify = require('../validation/verifyToken');

const uri = process.env.URI;

const client = new MongoClient(uri);

router.get('/', verify, async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db('final-project')
      .collection('questions')
      .find()
      .toArray();
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = router;
