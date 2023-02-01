const db = require('../../model/index.js');
const { postReview } = require('../../model/postReview.js');

module.exports = {
  addReview: (req, res) => {

    let query = req.query;

    // console.log('ADD REVIEW req.query', query)

    return postReview(query);

  }
}