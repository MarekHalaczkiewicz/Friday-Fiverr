require('dotenv').config();
const mongoose = require('mongoose');
const dbPath = process.env.DB_LINK;

const connectionOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose.connect(dbPath, connectionOptions);
mongoose.Promise = global.Promise;

module.exports = {
  User: require('../models/user-model'),
  Project: require('../models/project-model'),
};
