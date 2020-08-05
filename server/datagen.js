const faker = require('faker');
const mysql = require('mysql');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const db = require('../db');


const downloadImage = (url, imgPath) => {
  axios({
    url,
    responseType: 'stream'
  })
    .then(response => {
      return new Promise((resolve, reject) => {
        response.data
          .pipe(fs.createWriteStream(imgPath))
          .on('finish', () => resolve())
          .on('error', (e) => reject(e));
      });
    });
};

/* axios.get('http://picsum.photos/v2/list')
  .then(response => {
    let list = response.data.slice(0, 4);
    return Promise.all(list.map((pic, i) => downloadImage(pic.download_url, path.join(__dirname, `/test/${i}.jpg`))));
  })
  .catch(err => console.log(err));

 */

db.query('DESCRIBE users', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});