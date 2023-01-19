const mysql = require('mysql2');

var connection = mysql.createConnection({
  user: 'root',
  password: 'password',
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