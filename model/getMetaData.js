const db = require('./index.js');

module.exports = {

  getMetaRatRec: (params) => {

    let { product_id } = params;

    let ratQuery = `SELECT rating, recommend FROM results WHERE product_id = ${product_id}`;

    const ratsAndRec = new Promise((resolve , reject) => {
      db.connection.query(ratQuery, (err, results, fields) => {
        if (err) reject(err);

        resolve(results);
      });
    });

  },

  getMetaChars: (params) => {

    let { product_id } = params;

    let charQuery =
    `SELECT *
    FROM characteristics
    JOIN characteristics_reviews
    ON characteristics.id = characteristics_reviews.characteristic_id
    WHERE characteristics.product_id = ${product_id}`

    const chars = new Promise((resolve , reject) => {
      db.connection.query(charQuery, (err, results, fields) => {
        if (err) reject(err);

        resolve(results);
      });
    });

  },

  getMeta: (params) => {

    return new Promise((resolve, reject) => {

      // console.log("CALLING METADATA 🐡")

      let product_id = params.product_id;

      let resObj = {
        "product_id": product_id
      }

      // Needs for ResOBJ:
      // - ratings: from results table
      // - recommended: from results table
      // - characteristics: from characteristics and characteristic reviews
      // SELECT *
      // FROM characteristics
      // JOIN characteristics_reviews
      // ON characteristics.id = characteristics_reviews.characteristic_id
      // WHERE characteristics.product_id = 71669;

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


      let ratQuery = `SELECT rating, recommend FROM results WHERE product_id = ${product_id}`;

      // SELECT rating, recommend FROM results WHERE product_id = 71669;

      const ratsAndRec = new Promise((resolve , reject) => {
        db.connection.query(ratQuery, (err, results, fields) => {
          if (err) reject(err);

          resolve(results);
        })
      })

      let charQuery =
      `SELECT characteristics_reviews.id, value, name
      FROM characteristics
      JOIN characteristics_reviews
      ON characteristics.id = characteristics_reviews.characteristic_id
      WHERE characteristics.product_id = ${product_id}`;

      // `SELECT *
      // FROM characteristics
      // JOIN characteristics_reviews
      // ON characteristics.id = characteristics_reviews.characteristic_id
      // WHERE characteristics.product_id = ${product_id}`;

      // ALTER TABLE characteristics_reviews MODIFY COLUMN characteristic_id INT PRIMARY KEY NOT NULL;

      const chars = new Promise((resolve , reject) => {
        db.connection.query(charQuery, (err, results, fields) => {
          if (err) reject(err);

          resolve(results);
        })
      })

      Promise.all([ratsAndRec, chars])
        .then((data) => {
          // console.log('data from promise.all, ', data);

          // consider adding different middleware files
          // transform data:

          let ratingObj = {};
          let recObj = {};
          let charsObj = {};
          let charCount = {};

          let ratsAndRecs = data[0];
          let charsRes = data[1];

          ratsAndRecs.forEach((obj) => {
            let curRating = obj.rating;
            let curRec = obj.recommend;

            if (ratingObj[curRating] === undefined) {
              ratingObj[curRating]= 1;
            } else {
              ratingObj[curRating]++;
            }

            if (recObj[curRec] === undefined) {
              recObj[curRec] = 1;
            } else {
              recObj[curRec]++;
            }

          })

          // console.log('charsRes', charsRes)

          charsRes.forEach((obj) => {
            let curChar = obj.name.replace(/['"]+/g, '');
            let curVal = obj.value

            if (charCount[curChar] === undefined) {
              charCount[curChar] = 1;
            } else {
              charCount[curChar]++;
            }

            if (charsObj[curChar] === undefined) {
              delete obj.name;

              charsObj[curChar] = obj;
            } else {
              charsObj[curChar].value += curVal;
            }

          })


          Object.keys(charsObj).forEach((key) => {
            charsObj[key].value = charsObj[key].value / charCount[key];
          })

          // console.log('charsObj', charsObj)

          resObj['ratings'] = ratingObj;
          resObj["recommended"] = recObj;
          resObj["characteristics"] = charsObj;

          resolve(resObj)
          // return resObj
        })
        .catch((err) => {
          reject(err);
          console.log('metadata prmise/all  error ', err);
        })

    });

  }
}

// select id as review_id, rating, summary, recommend, response, body, FROM_UNIXTIME(date/1000) AS date, reviewer_name, helpfulness,
//     ( select JSON_ARRAYAGG(JSON_OBJECT("id", id, "url", url))
//         from (
//             select rp.id, rp.url
//             from results r
//             inner join photos rp
//             on r.id = rp.review_id
//             where rp.review_id = results.id
//         ) photo_rows
//     ) as photos
//     from results
//     WHERE product_id=999999 AND reported=false
//     ORDER BY helpfulness
//     DESC LIMIT 5;

//     SELECT * FROM results ORDER BY ID DESC LIMIT 1;