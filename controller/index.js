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

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/reviews', (req, res) => {

  getReviews(req, res)
    .then((data) => {
      // console.log('res', data);
      console.log('sending data')
      console.log('data', data);
      res.send(data)
    })
    .catch((err) => {
      console.log('err', err)
    })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



