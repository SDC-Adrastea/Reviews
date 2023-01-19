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
  console.log('req.query', req.query);
  res.send('TEST')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



