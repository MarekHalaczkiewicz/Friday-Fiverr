require('dotenv').config();
const mongoose = require('mongoose');
const dbPath = process.env.DB_LINK;

const connection = () => {
  mongoose.connect(dbPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
  const db = mongoose.connection;
  db.on('error', () => {
    console.log('> Probelm with connection to db');
  });
  db.once('open', () => {
    console.log('> db connected');
  });
};
module.exports = connection;
