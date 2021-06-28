require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const router = require('./src/routes');
const connection = require('./db-config');

app.use(express.json());
connection();
app.use('/api', router);

app.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
