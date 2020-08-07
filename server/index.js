const express = require('express');
const path = require('path');
const db = require('../db');

const app = express();
app.use(express.static(__dirname + '/../client/dist'));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/images/:id', (req, res) => {
  const id = req.url.slice(12);
  db.query('SELECT * FROM images WHERE location_id = ? ORDER BY img_order ASC', [id], (err, data) => {
    if (err) {
      console.log(err);
      res.send('An error occurred');
    } else {
      res.send(data);
    }
  });
});


const port = 3001;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


module.exports = app;
