const db = require('./index.js');

module.exports = {
  postReview: (params) => {

    // JOBS:
    // - add photos to photo table
    // - add characteristics?

    let {
        product_id, rating, recommend,
        body, characteristics, photos,
        summary, name, email
        } = params;

    // console.log('params', params)

    // data shape:


    // "product": "71699",
    // "page": 0,
    // "count": 999999999,
    // "results": [
    //     {
    //         "review_id": 1276826,
    //         "rating": 5,
    //         "summary": "best purchase ever ",
    //         "recommend": true,
    //         "response": null,
    //         "body": "best purchase ever best purchase ever best purchase ever best purchase ever ",
    //         "date": "2022-09-22T00:00:00.000Z",
    //         "reviewer_name": "jackson11",
    //         "helpfulness": 31,
    //         "photos": []
    //     },

    // GIVEN:
    // review: {
    //   product_id: '71669',
    //   rating: '5',
    //   recommend: 'false',
    //   body: "'its blue'",
    //   characteristics: '{}',
    //   photos: '[]',
    //   summary: "'super cool'",
    //   name: "'tester22'",
    //   email: "'tester22@gmail.com'"
    // }

    // PLAIN ENG QUERY:
    // insert the following into results where the product id is matching:
    // id (new), rating (given), date (new), summary (given), body (given), reccomended (given), photos (given),
    // reported (new), name (given), email (given), response ?, helpfulness (given)

    // problem: photos goes into another table

    // INSERT INTO results
    // (product_id, rating, date, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness)
    // VALUES
    // (71669, 2, UNIX_TIMESTAMP(), 'test sum 1', 'test body 1', true, false, 'tester1', 'tester1@gmail.com', '', 20);

    let query =
    `INSERT INTO results
    (product_id, rating, date, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness)
    VALUES
    (${product_id}, ${rating}, UNIX_TIMESTAMP(), ${summary}, false, ${body}, ${recommend}, false, ${name}, '', 1)`;

    return new Promise((resolve, reject) => {
      db.connection.query(query, (err, results, fields) => {
        if (err) reject(err);

        resolve(results);
      })
    })


  }
}