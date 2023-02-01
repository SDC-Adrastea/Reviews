const db = require('../../model/index.js');
const { sendReport } = require('../../model/sendReport.js');

module.exports = {
  reportReview: (req, res) => {
    let query = req.query;

    return sendReport(query);

  }
}