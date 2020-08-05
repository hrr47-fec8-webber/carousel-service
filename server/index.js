const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});


const port = 3001;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});




