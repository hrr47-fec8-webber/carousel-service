# Booked Image Gallery

Welcome to Booked, a vacation rental booking website! This repo contains the Image Gallery and Lightbox component.

![In Action](./screenshots/ezgif-6-226eeb09347c.gif?raw=true)

## Related Projects

  - https://github.com/hrr47-fec8-webber/booking-service
  - https://github.com/hrr47-fec8-webber/reviews-service
  - https://github.com/hrr47-fec8-webber/moreplacestostay-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

This module builds a simple interactive photo gallery for Booked. It takes a numeric location ID from the URL and fetches all images associated with that location. At the moment, there are 100 primary records, so all IDs between 1 and 100 should work.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- Express 4.17.1
- Axios 0.19.2
- React 16.13.1
- MySQL 2.18.1

Dev:
- Babel 7.11.1
- Webpack 4.44.1
- Jest 26.2.2
- Enzyme 3.11.0
- Amazon S3

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### Running The Module

Make sure all dependencies are installed. In the db config file, ensure correct username and password for your MySQL. Then, once the MySQL server is up and running, run the carousel.sql file to implement schema for table images. Then, from the command line, run the following:

```sh
npm run seed
```

This will seed the database with 100 primary records with location IDs spanning 1-100 and anywhere between 4 and 29 images per location. The images themselves are stored in an Amazon S3 bucket with numeric names between 1 and 50. The image selection per location is random.

Once this is done, run:

```sh
npm start
npm run build
```
Direct your browser to localhost:3001/:id, and you should see the gallery module populated with images from your database. To specify a different location, change the ID (anywhere between 1 and 100, inclusive).

### Testing

To run tests:

```sh
npm test
```

Testing is implemented with Jest and Enzyme. Should you update the components in a way that changes the snapshot against which the tests are compared, run the following to update all snapshots:

```sh
npm test -- -u
```

## Views

### Five Available Photos
![Five Available Photos](./screenshots/5Imgs.png?raw=true)

### Four Available Photos
![Four Available Photos](./screenshots/4Imgs.png?raw=true)

### Three Available Photos
![Three Available Photos](./screenshots/3Imgs.png?raw=true)

### Two Available Photos
![Two Available Photos](./screenshots/2Imgs.png?raw=true)

### Single Available Photo
![Single Available Photo](./screenshots/1IMG.png?raw=true)
