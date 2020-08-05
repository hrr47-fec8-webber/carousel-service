const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: 'root',
  database: 'carousel'
});

connection.connect();

module.exports = connection;
