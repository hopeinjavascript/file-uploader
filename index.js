require('dotenv').config({ debug: true });
const express = require('express');
const path = require('path');

const app = express();

app.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>
  console.log(
    `File Uploader application server is listening on port ${PORT}...`
  )
);
