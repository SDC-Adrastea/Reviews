const express = require('express')
const app = express()

const connection = require('../model/index.js')

const dotenv = require('dotenv');
dotenv.config();

var cors = require('cors');
app.use(cors());

const port = process.env.PORT;
app.use(express.json());


const { getReviews } = require('./routes/getReviews.js');
const { getMetaData } = require('./routes/getMetaData.js');
const { addReview } = require('./routes/addReview.js');
const { markHelpful } = require('./routes/markHelpful.js');
const { reportReview } = require('./routes/reportReview.js');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/reviews', (req, res) => {

  getReviews(req, res)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      console.log('err', err)
    })
});

app.get('/metaData', (req, res) => {

  getMetaData(req, res)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log('metadata error: ', err);
    })
});


app.post('/reviews', (req, res) => {
  addReview(req, res)
    .then((data) => {
      res.send(201);
    })
    .catch((err) => {
      console.log('metadata error: ', err);
    })
});

app.put('/helpful', (req, res) => {
  markHelpful(req, res)
    .then((data) => {
      res.send(204);
    })
    .catch((err) => {
      console.log('metadata error: ', err);
    })
});

app.put('/reportReview', (req, res) => {
  reportReview(req, res)
    .then((data) => {
      res.send(204);
    })
    .catch((err) => {
      console.log('metadata error: ', err);
    })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



