const db = require('../../model/index.js');
const { getResults } = require('../../model/getResults.js');
const { getPhotos } = require('../../model/getPhotos.js')

module.exports = {
  getReviews: (req, res) => {
    let query = req.query;

    let data = {
      "product_id": query.product_id,
      "page": 0,
      "count": query.count
    };

    return new Promise((resolve, reject) => {

      // Promise.all([getResults(query), getPhotos(query)])
      // .then((response) => {
      //   let results = response[0];
      //   let photos = response[1];

      //   data.results = results;
      //   data.results[0].photos = photos

      //   return data;
      // })
      getResults(query)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      })
    })

  }
}