const db = require('./index.js');

module.exports = {
  getResults: (params) => {

  let product_id = params.product_id;

    // let query =  `SELECT * FROM results LEFT JOIN photos ON results.id = photos.review_id WHERE results.product_id = ${product_id}`


    // SELECT id FROM results WHERE product_id = 71669;

    let query =
    `select id as review_id, rating, summary, recommend, response, body, FROM_UNIXTIME(date/1000) AS date, reviewer_name, helpfulness,
    ( select JSON_ARRAYAGG(JSON_OBJECT("id", id, url, url))
        from (
            select rp.id, rp.url
            from results r
            inner join photos rp
            on r.id = rp.review_id
            where rp.review_id = results.id
        ) photo_rows
    ) as photos
    from results
    WHERE product_id=71669 AND reported=false
    ORDER BY helpfulness
    DESC LIMIT 10
    `;


    // `SELECT r.*, (SELECT JSON_ARRAYAGG(JSON_OBJECT('id', id, 'url', url)) from photos WHERE id = 5) AS photos
    // FROM results r
    // JOIN photos p
    // ON r.id = p.review_id
    // LIMIT 5`;


    // plan:

    // 0.5. enter the data in a relational way that has keys
    // 1. Use select AS with JSON agg and stuff
    // 3.

    // `select id as review_id, rating, summary, recommend, response, body, FROM_UNIXTIME(date/1000) AS date, reviewer_name, helpfulness,
    // ( select JSON_ARRAYAGG(JSON_OBJECT("id", id, url, url))
    //     from (
    //         select rp.id, rp.url
    //         from results r
    //         inner join photos rp
    //         on r.id = rp.review_id
    //         where rp.review_id = results.id
    //     ) photo_rows
    // ) as photos
    // from results
    // WHERE product_id=71669 AND reported=false
    // ORDER BY helpfulness
    // DESC LIMIT 10
    // `





    // `SELECT r.*, (SELECT JSON_ARRAYAGG(JSON_OBJECT('review_id', review_id, 'id', id, 'url', url)) from photos WHERE review_id =
    // (SELECT id FROM results WHERE product_id = 71669)
    // )
    // FROM results r
    // JOIN photos p
    // ON r.id = p.review_id
    // GROUP BY r.id LIMIT 10`;


    // SELECT id FROM results WHERE results.id = (SELECT id FROM results WHERE product_id = 71669);



    // `SELECT *, FROM_UNIXTIME(date/1000) AS date FROM results WHERE product_id = ${product_id}`;
    // let query = `SELECT *, FROM_UNIXTIME(date/1000) AS date FROM results WHERE id = 10`;

    // SELECT JSON_ARRAYAGG(JSON_OBJECT('id', id, 'url', url)) from photos WHERE id = 5;

    return new Promise((resolve, reject) => {
      db.connection.query(query, (err, results, fields) => {
        if (err) reject(err);

        console.log('resilts from jpom', results)
        resolve(results);
      })
    })
  }
}