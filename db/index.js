const mysql = require('mysql');
const config = require('./config');

const connection = mysql.createConnection({
  user: config.user,
  password: config.password,
  database: 'carousel'
});

connection.connect();

module.exports = connection;
