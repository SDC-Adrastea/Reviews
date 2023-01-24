

SELECT *, FROM_UNIXTIME(date/1000) AS date FROM results INNER JOIN photos ON results.id = photos.id WHERE results.product_id = 71699 ORDER BY helpfulness DESC LIMIT 9999999;


SELECT *, FROM_UNIXTIME(date/1000) AS date FROM results INNER JOIN photos ON results.id = photos.id WHERE results.product_id = 71699 ORDER BY helpfulness DESC LIMIT 9999999;


GROUP_CONCAT(url, review_id ORDER BY photos.id)

`SELECT t1.*, GROUP_CONCAT(t2.url) AS photos
FROM results AS t1
INNER JOIN photos AS t2 ON t1.id = t2.review_id
WHERE t1.product_id = 71699
GROUP BY t1.id`;

SELECT *, FROM_UNIXTIME(date/1000) AS date
FROM results AS t1
INNER JOIN photos AS t2 ON t1.id = t2.review_id
WHERE t1.product_id = 71699
ORDER BY helpfulness
DESC LIMIT 9999999;

SELECT *, FROM_UNIXTIME(date/1000) AS date
FROM results AS t1
WHERE t1.product_id = 71699
ORDER BY helpfulness
DESC LIMIT 9999999
INNER JOIN JSON_ARRAYAGG(JSON_OBJECT('id', id, 'url', url)) from photos WHERE id = 5;


SELECT json_object('id', id, 'url', url) from photos where id = 5;

SELECT JSON_ARRAYAGG(JSON_OBJECT('id', id, 'url', url)) from photos WHERE id = 5;

// old

`SELECT *, FROM_UNIXTIME(date/1000) AS date
FROM results AS t1
INNER JOIN photos AS t2 ON t1.id = t2.review_id
WHERE t1.product_id = 71699
ORDER BY helpfulness
DESC LIMIT 9999999;`;


SELECT json_build_object(
  'product_id', ${product_id},
  'results',(
    SELECT json_agg(
      json_build_object(
        'question_id', question_id,
        'question_body',question_body,
        'question_date', submitted_date,
        'asker_name', username,
        'question_helpfulness',question_helpfulness,
        'reported', reported,
        'answers',(
          SELECT json_object_agg(
              answer_id,(
                SELECT json_build_object(
                  'id', answer_id,
                  'body', answer_body,
                  'date', submitted_date,
                  'answerer_name', username,
                  'reported', reported,
                  'helpful', answer_helpfulness,
                  'photos',
                    (SELECT json_agg(pic_url) FROM PHOTOS where photos.answer_id = answers.answer_id)
                )
              )
          ) FROM ANSWERS where answers.question_id = questions.question_id)
        )
      ) FROM QUESTIONS where product_id = ${product_id} limit ${count}
    )
  );


// results obj:

SELECT JSON_ARRAY(
  'results',
  (SELECT JSON_OBJECT(
  "rating", rating,
  "summary", summary,
  "recommend", recommend,
  "response", response,
  "body", body,
  "date", date,
  "reviewer_name", reviewer_name,
  "helpfulness", helpfulness
  ) FROM results WHERE id = 10)
);




// main obj:

SELECT JSON_OBJECT(
  "product", product_id , "page", 0, "count", 999999,
  'results', (SELECT JSON_ARRAY(
    (SELECT JSON_OBJECT(
      "rating", rating,
      "summary", summary,
      "recommend", recommend,
      "response", response,
      "body", body,
      "date", date,
      "reviewer_name", reviewer_name,
      "helpfulness", helpfulness,
      'photos',
        (SELECT JSON_ARRAY(
          (SELECT JSON_OBJECT("review_id", review_id, "url", url) FROM photos WHERE id = 10)
        ))
      ) FROM results WHERE id = 10)
  ))
) FROM results WHERE product_id = 71669 ORDER BY helpfulness DESC LIMIT 9999999;


// photos array:

SELECT JSON_ARRAY(
  'photos',
  (SELECT JSON_OBJECT("review_id", review_id, "url", url) FROM photos WHERE id = 10)
);


`SELECT json_build_object(
  'product_id', ${product_id},
  'page': 0,
  'count': ${count},
  'results',(
    SELECT json_agg(
      json_build_object(
        'rating', rating,
        'summary', summary,
        'recommend', recommend,
        'response', response,
        'body', body,
        'date', date,
        'reviewer_name' reviewer_name,
        'helpfulness', helpfulness,
        'photos',
          (SELECT json_object_agg(
                  'photos',
                    (SELECT json_agg(id, url) FROM photos WHERE photos.id = results.review_id)
                )
          )
      )
    ) FROM results where product_id = ${product_id} ORDER BY ${sort} DESC LIMIT ${count}
  )
);`


  "product": "71699",
  "page": 0,
  "count": 999999999,
  "results": [
      {
          "review_id": 1276826,
          "rating": 5,
          "summary": "best purchase ever ",
          "recommend": true,
          "response": null,
          "body": "best purchase ever best purchase ever best purchase ever best purchase ever ",
          "date": "2022-09-22T00:00:00.000Z",
          "reviewer_name": "jackson11",
          "helpfulness": 31,
          "photos": [
            {
                "id": 2457042,
                "url": "https://res.cloudinary.com/dblteitfp/image/upload/v1673044081/lhykjyv8xmtmqamtofce.webp"
            },
      },

      console.log('req query', req.query)

      let product_id = req.query.product_id;
      let sort = 'date';
      let count = req.query.count;

      if (req.query.sort === 'relevant') {
        sort = 'helpfulness';
      }

      let testStr =
      ` (SELECT JSON_OBJECT(
        "rating", rating,
        "summary", summary,
        "recommend", recommend,
        "response", response,
        "body", body,
        "date", "2022-09-22T00:00:00.000Z",
        "reviewer_name", reviewer_name,
        "helpfulness", helpfulness
        ) FROM results WHERE product_id = 71669);`



        // "2022-09-22T00:00:00.000Z"


        // THIS LOOKS PRETTY GOOD:
        // (SELECT JSON_OBJECT(
        //   "rating", rating,
        //   "summary", summary,
        //   "recommend", recommend,
        //   "response", response,
        //   "body", body,
        //   "date", FROM_UNIXTIME(date/1000),
        //   "reviewer_name", reviewer_name,
        //   "helpfulness", helpfulness
        //   ) FROM results WHERE product_id = 71669);

      // 'photos',
      // (SELECT JSON_ARRAY(
      //   (SELECT JSON_OBJECT("review_id", review_id, "url", url) FROM photos WHERE id = 10)
      // ))




      // let queryStr = `SELECT * FROM results WHERE product_id = ${product_id} ORDER BY ${sort} DESC LIMIT ${count}`;

      return new Promise((resolve, reject) => {
        db.connection.query(testStr, (err, results, fields) => {
          if (err) reject(err);

          let data = {
            "product": "71699",
            "page": 0,
            "count": 999999999
          };

         const expected =  {
            "product": "71699",
            "page": 0,
            "count": 999999999,
            "results": [
                {
                    "review_id": 1276826,
                    "rating": 5,
                    "summary": "best purchase ever ",
                    "recommend": true,
                    "response": null,
                    "body": "best purchase ever best purchase ever best purchase ever best purchase ever ",
                    "date": "2022-09-22T00:00:00.000Z",
                    "reviewer_name": "jackson11",
                    "helpfulness": 31,
                    "photos": []
                },
            ]
          }

          data.results = results;

          resolve(expected);
        })
      })
    }