const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('../db');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use('/:id', express.static(path.join(__dirname, '/../client/dist')));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

// EXISTING IMPLEMENTATION
app.get(`/api/images/:location`, (req, res) => {
  const location = req.params.location;
  db.query(`SELECT * FROM images WHERE location_id = ${location} ORDER BY img_order ASC`, (err, data) => {
    if (err) {
      res.send('An error occurred with GET request');
    } else {
      res.send(data);
    }
  });
})

// START NOT APPLICABLE CRUD API REQUESTS
app.post(`/api/images/:location`, (req, res) => {
  db.query('INSERT INTO images (location_id, url, img_order) VALUES (101, https://www.pexels.com/photo/interior-design-of-a-house-1571460/, 1)', (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
  // res.send(`POST request images for location #${location}`)
})

app.put(`/api/images/:location`, (req, res) => {
  const location = req.params.location;
  db.query(`UPDATE images SET location_id = ${location} WHERE id = ${location}`, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
  // res.send(`PUT request images for location #${location}`)
})

app.delete(`/api/images/:location`, (req, res) => {
  db.query(`DELETE FROM images WHERE id > 150`, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
  // res.send(`DELETE request images for location #${location}`)
})
// END NOT APPLICABLE CRUD API REQUESTS

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
