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
  res.status(200).send('Hello World!')
})

app.get('/reviews', (req, res) => {

  getReviews(req, res)
    .then((data) => {
      console.log('sending data')
      res.status(200).send(data)
    })
    .catch((err) => {
      res.send(400)
      console.log('GET reviews ERR: ', err)
    })
});

app.get('/metaData', (req, res) => {

  getMetaData(req, res)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.send(400)
      console.log('GET metadata ERR: ', err);
    })
});


app.post('/reviews', (req, res) => {
  addReview(req, res)
    .then((data) => {
      console.log('post review data', data);
      res.send(201);
    })
    .catch((err) => {
      res.send(500);
      console.log('POST review ERR: ', err);
    })
});

app.put('/helpful', (req, res) => {
  markHelpful(req, res)
    .then((data) => {
      res.send(204);
    })
    .catch((err) => {
      res.send(500);
      console.log('PUT helpful ERR: ', err);
    })
});

app.put('/reportReview', (req, res) => {
  reportReview(req, res)
    .then((data) => {
      res.send(204);
    })
    .catch((err) => {
      res.send(500);
      console.log('PUT report ERR: ', err);
    })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



