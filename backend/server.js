require('dotenv').config();
require('rootpath')();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const router = require('./src/routes');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('./src/_helpers/jwt');
const errorHandler = require('./src/_helpers/error-handler');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/api', router);

app.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// use JWT auth to secure the api
app.use(jwt());

// global error handler
app.use(errorHandler);
