const db = require('./index.js');

module.exports = {
  getResults: (params) => {

    let query = `SELECT *, FROM_UNIXTIME(date/1000) AS date FROM results WHERE id = 10`;
    return new Promise((resolve, reject) => {
      db.connection.query(query, (err, results, fields) => {
        if (err) reject(err);

        resolve(results);
      })
    })
  }
}