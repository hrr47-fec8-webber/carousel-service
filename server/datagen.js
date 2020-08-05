const db = require('../db');

const insert = (locationId, url, order) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO images (location_id, url, img_order) VALUES (?, ?, ?)', [locationId, url, order], (err, success) => {
      if (err) {
        reject(err);
      } else {
        resolve(success);
      }
    });
  });
};


const seed = () => {
  let allPromises = [];
  let primary = 1;
  while (primary <= 100) {
    let totalImages = Math.floor(Math.random() * (25)) + 5;
    for (let i = 1; i < totalImages; i++) {
      let img = Math.ceil(Math.random() * 50);
      let imgUrl = `https://team-webber-image-carousel-472020.s3-us-west-2.amazonaws.com/${img}.jpg`;
      insert(primary, imgUrl, i);
    }
    primary++;
  }
  return Promise.all(allPromises)
    .then(() => console.log('mySQL DB seeded'))
    .catch((err) => console.log(err));
};

seed();