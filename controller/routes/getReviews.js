const db = require('../../model/index.js');
const { getResults } = require('../../model/getResults.js');

module.exports = {
  getReviews: (req, res) => {
    let query = req.query;

    // console.log('reqQuer for testing', req.query);

    let resObj = {
      "product": query.product_id,
      "page": 0,
      "count": query.count
    };

    return new Promise((resolve, reject) => {

      getResults(query)
        .then((data) => {

          // refactor to put this logic in the query may be faster
          data.forEach((review) => {
            if (!review.photos) review.photos = [];
          })

          resObj.results = data;
          resolve(resObj);
        })
        .catch((err) => {
          reject(err);
        })
    })

  }
}