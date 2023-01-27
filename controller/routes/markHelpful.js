const db = require('../../model/index.js');
const { sendHelpful } = require('../../model/sendHelpful.js');

module.exports = {
  markHelpful: (req, res) => {
    let query = req.query;



    return sendHelpful(query);

  }
}