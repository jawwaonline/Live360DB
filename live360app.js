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

app.get('/', async (req, res) => {
  res.send({
    message: 'Thank you - API WORKING',
  });
});

app.get('/localizations', async (req, res) => {
  const localizations = await Localization.find();
  const parsedheader = await req.headers;
  console.log(parsedheader);
  res.send({
    message: 'Your Data',
    data: localizations,
  });
});

app.listen(PORT, () => {
  console.log(`server listening ${PORT}`);
});
