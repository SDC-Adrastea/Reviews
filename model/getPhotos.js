const db = require('./index.js');

module.exports = {
  getPhotos: (params) => {

    // console.log('params in photo', params)


    // SELECT * FROM results LEFT JOIN photos ON results.id = photos.review_id WHERE results.product_id = 71669

    let query = `SELECT * FROM photos WHERE id = 10`;
    return new Promise((resolve, reject) => {
      db.connection.query(query, (err, results, fields) => {
        if (err) reject(err);

        resolve(results);
      })
    })
  }
}