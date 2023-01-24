const db = require('./index.js');

module.exports = {
  getMeta: (params) => {
    // console.log('metadata params ', params);
    let query = `SELECT * FROM characteristics WHERE id = 10`;
    return new Promise((resolve, reject) => {
      db.connection.query(query, (err, results, fields) => {
        if (err) reject(err);
        resolve(results[0]);
      })
    })
  }
}