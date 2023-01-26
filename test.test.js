const nock = require('nock');
const request = require('supertest');
const assert = require('assert');
const baseURL = "http://localhost:8080";
const { reviewData } = require('./tests/reviewData.js');
const { metaData } = require('./tests/metaDataData.js');
jest.setTimeout(10000)


describe('GET /', () => {

  it('responds with 200', async function() {
    const response = await request(baseURL)
      .get('/')
    expect(response.status).toEqual(200);

  });

});

describe('GET /reviews', () => {

  it('responds with 200 for good request', async function() {
    const response = await request(baseURL)
      .get('/reviews?product_id=71669&count=10')
      expect(response.status).toEqual(200);
  }, 10000);

  // it('sends back data in correct shape', async function() {
  //   const response = await request(baseURL)
  //     .get('/reviews?product_id=71669&count=10')
  //     expect(response.body).toEqual(reviewData);
  // }, 10000)

  it('send back status of 400 if issue', async function() {
    const response = await request(baseURL)
      .get('/reviews')
      expect(response.status).toEqual(400);
  }, 5000)

});

describe('GET /metaData', () => {

  it('responds with 200', async function() {
    const response = await request(baseURL)
      .get('/metaData?product_id=71669')
      expect(response.status).toEqual(200);
  }, 10000);

  // it('sends back data in correct shape', async function() {
  //   const response = await request(baseURL)
  //     .get('/metaData?product_id=71669')
  //     expect(response.body).toEqual(metaData);
  // }, 10000)

  it('send back status of 400 if issue', async function() {
    const response = await request(baseURL)
      .get('/metaData')
      expect(response.status).toEqual(400);
  }, 10000)

});


describe('POST /reviews', () => {

  it('responds with 201', async function() {
    const response = await request(baseURL)
      .post('/reviews')
      expect(response.status).toEqual(201);
  }, 10000);

  it('send back status of 400 if issue', async function() {
    const response = await request(baseURL)
      .post('/reviews')
      expect(response.status).toEqual(400);
  }, 10000)

});

describe('PUT /helpful', () => {

  it('responds with 200', async function() {
    const response = await request(baseURL)
      .put('/helpful')
      expect(response.status).toEqual(201);
  }, 10000);

  it('send back status of 400 if issue', async function() {
    const response = await request(baseURL)
      .put('/helpful')
      expect(response.status).toEqual(400);
  }, 10000)

});

describe('PUT /reportReview', () => {

  it('responds with 200', async function() {
    const response = await request(baseURL)
      .put('/reportReview')
      expect(response.status).toEqual(201);
  }, 10000);

  it('send back status of 400 if issue', async function() {
    const response = await request(baseURL)
      .put('/reportReview')
      expect(response.status).toEqual(400);
  }, 10000)

});




