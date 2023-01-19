const express = require('express')
const app = express()

const connection = require('../model/index.js')

const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;
app.use(express.json());


const { getReviews } = require('./routes/getReviews.js');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  console.log('test working')
  // console.log('req.query', req.query);
  // res.send('TEST')

  getReviews(req, res)
    .then((res) => {
      console.log('res', res);
    })
    .catch((err) => {
      console.log('err', err)
    })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



