const db = require('../../model/index.js');
const { getMeta } = require('../../model/getMetaData.js');

module.exports = {
  getMetaData: (req, res) => {
    let query = req.query;

    return getMeta(query);

  }
}