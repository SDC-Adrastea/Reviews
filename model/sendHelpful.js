const db = require('./index.js');

module.exports = {
  sendHelpful: (params) => {

    // make the queryStr that enters the data correctly

    return new Promise((resolve, reject) => {
      db.connection.query(query, (err, results, fields) => {
        if (err) reject(err);

        resolve(results);
      })
    })
  }
}