const db = require('./index.js');

module.exports = {
  getPhotos: (params) => {

    let query = `SELECT * FROM photos WHERE id = 10`;
    return new Promise((resolve, reject) => {
      db.connection.query(query, (err, results, fields) => {
        if (err) reject(err);

        resolve(results);
      })
    })
  }
}