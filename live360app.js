require('dotenv').config();

const express = require('express');

const { Localization } = require('./model');
const { PORT } = require('./env');
const { connectDB } = require('./dbconnection');

const app = express();
app.use(express.json());

connectDB();

app.post('/', async (req, res) => {
  console.log(req.body);
  const dataToSave = await Localization(req.body);
  const savedData = await dataToSave.save();

  res.send({
    message: 'Thank you',
    data: req.body,
    saved: savedData,
  });
});

app.listen(PORT, () => {
  console.log(`server listening ${PORT}`);
});
