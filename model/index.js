const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

// var connection = mysql.createConnection({
//   user: 'root',
//   password: process.env.DB_PASSWORD,
//   host: 'mysql_server',
//   database: 'reviews'
// });

// var connection = mysql.createConnection({
//   user: 'root',
//   password: process.env.DB_PASSWORD,
//   host: '127.0.0.1',
//   database: 'reviews',
// });

var connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  // socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
  // port: 80
});

connection.connect((err, res) => {
  if (err) throw err;

  console.log('connected')

});

module.exports = {
  connection
}