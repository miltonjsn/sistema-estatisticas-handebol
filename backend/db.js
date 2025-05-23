const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'handebol',
  password: 'senha123',
  database: 'sistema_handebol'
});

module.exports = connection;
