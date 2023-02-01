const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

var connection = mysql.createConnection({
  user: 'root',
  password: process.env.DB_PASSWORD,
  host: '127.0.0.1',
  database: 'reviews',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('connected')

});

module.exports = {
  connection
}