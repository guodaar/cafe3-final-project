require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const questionsRoute = require('./routes/questions');
const answersRoute = require('./routes/answers');

const app = express();
const port = process.env.PORT || 8080;
const uri = process.env.URI;

mongoose
  .connect(uri, { useNewUrlParser: true, dbName: 'final-project' })
  .then(() => console.log('connected to db!'))
  .catch((error) => console.log(error));

app.use(cors());
app.use(express.json());

app.use('/api/user', authRoute);
app.use('/api/questions', questionsRoute);
app.use('/api/answers', answersRoute);

app.listen(port, () => {
  console.log(`Server is running on ${port} port`);
});
