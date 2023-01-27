const db = require('./index.js');

module.exports = {
  sendHelpful: (params) => {

    let { review_id } = params;     // { review_id: '413980' }

    let query = `UPDATE results SET helpfulness = helpfulness + 1 WHERE id = ${review_id}`;

    return new Promise((resolve, reject) => {
      db.connection.query(query, (err, results, fields) => {
        if (err) reject(err);

        resolve(results);
      })
    })
  }
}