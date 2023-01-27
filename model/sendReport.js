const db = require('./index.js');

module.exports = {
  sendReport: (params) => {

    console.log('send report params ', params)
    let { review_id } = params;

    let query = `UPDATE results SET reported = true WHERE id = ${review_id}`;

    return new Promise((resolve, reject) => {
      db.connection.query(query, (err, results, fields) => {
        if (err) reject(err);

        resolve(results);
      })
    })
  }
}