const db = require('./index.js');

module.exports = {
  getResults: (params) => {

  let { sort, count, product_id } = params;

  if (sort === 'helpful') sort = 'helpfulness';
  if (sort === 'relevant') sort = 'helpfulness';
  if (sort === 'newest') sort = 'date';

    let query =
    `select id as review_id, rating, summary, recommend, response, body, FROM_UNIXTIME(date/1000) AS date, reviewer_name, helpfulness,
    ( select JSON_ARRAYAGG(JSON_OBJECT("id", id, "url", url))
        from (
            select rp.id, rp.url
            from results r
            inner join photos rp
            on r.id = rp.review_id
            where rp.review_id = results.id
        ) photo_rows
    ) as photos
    from results
    WHERE product_id=${product_id} AND reported=false
    ORDER BY ${sort}
    DESC LIMIT ${count}
    `;

    return new Promise((resolve, reject) => {
      db.connection.query(query, (err, results, fields) => {
        if (err) reject(err);
        resolve(results);
      })
    })
  }
}