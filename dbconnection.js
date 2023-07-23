const { MONGO_URI, DB_NAME } = require('./env');
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('trying connecting to: ' + MONGO_URI + DB_NAME);
    await mongoose.connect(MONGO_URI + DB_NAME);
    console.log('connected');
  } catch (error) {
    console.log('something broke connecting to DB ' + error);
  }
};

module.exports = {
  connectDB,
};
