module.exports = {
  postReview: (params) => {

    // let query = `SELECT *, FROM_UNIXTIME(date/1000) AS date FROM results WHERE id = 10`;
    // make the queryStr that enters the data correctly

    return new Promise((resolve, reject) => {
      db.connection.query(query, (err, results, fields) => {
        if (err) reject(err);

        resolve(results);
      })
    })
  }
}