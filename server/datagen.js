const faker = require('faker');
const http = require('http');
const fs = require('fs');
const path = require('path');

/*
for (let i = 0; i < 5; i++) {
  let file = fs.createWriteStream(path.join(__dirname, `/test/${i}.jpg`));
  let image = faker.image.image();
  http.get(image, (response) => response.pipe(file));
} */