const db = require('../../model/index.js')

module.exports = {
  getReviews: (req, res) => {
    // console.log('req', req.query)
    // console.log('db', db.connection)
    // console.log(db)

    return new Promise((resolve, reject) => {
      db.connection.query('SELECT * FROM results WHERE id = 1', (err, results, fields) => {
        if (err) reject(err);

        resolve(results);
      })
    })
  }
}