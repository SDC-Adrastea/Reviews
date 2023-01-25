const db = require('./index.js');

module.exports = {
  getMeta: (params) => {

    console.log("CALLING METADATA 🐡")

    let product_id = params.product_id;

    let resObj = {
      "product_id": product_id
    }

    // Needs for ResOBJ:
    // - ratings: from results table
    // - recommended: from results table
    // - characteristics: from characteristics and characteristic reviews

    // RATINGS AND REC Q: `SELECT rating, recommend FROM results WHERE product_id = ${product_id}`
    // still need to make data into correct shape



    // takes in 6 calls, all for different product ID's

    // characteristics_reviews

    // +------+-------------------+-----------+-------+
    // | id   | characteristic_id | review_id | value |
    // +------+-------------------+-----------+-------+
    // |    1 |                 1 |         1 |     4 |

    // characteristics

    // +------+------------+-------+
    // | id   | product_id | name  |
    // +------+------------+-------+
    // |    1 |          1 | "Fit" |
    // +------+------------+-------+

    // characteristic

    //hyp:
    // characteristics.id = characteristics_reviews.characteristic_id

    select * from characteristics where id = 123; //  123 |         34 | "Comfort"
    select * from characteristics_reviews where characteristic_id = 123;

    SELECT *
    FROM characteristics
    JOIN characteristics_reviews
    ON characteristics.id = characteristics_reviews.characteristic_id
    WHERE characteristics.product_id = 71669;




    select * from characteristics where product_id = 71669;
    select * from characteristics_reviews where id = 1;

    select * from characteristics where id = 239612;



    let query = `SELECT rating, recommend FROM results WHERE product_id = ${product_id}`;
    return new Promise((resolve, reject) => {
      db.connection.query(query, (err, results, fields) => {
        if (err) reject(err);

        resolve(results);
      })
    })
  }
}