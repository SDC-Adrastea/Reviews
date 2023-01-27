const nock = require('nock');
const request = require('supertest');
const assert = require('assert');
const baseURL = "http://localhost:8080";
const { reviewData_test } = require('./tests/reviewData.js');
const { metaData_test } = require('./tests/metaDataData.js');
// jest.setTimeout(10000)


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
      .get('/reviews?product_id=71669&count=10&sort=relevant')
      expect(response.status).toEqual(200);
  });

  it('send back status of 400 if issue', async function() {
    const response = await request(baseURL)
      .get('/reviews')
      expect(response.status).toEqual(400);
  });

  it('sends back data in correct shape', async function() {
    const response = await request(baseURL)
      .get('/reviews?product_id=77778&count=2&sort=relevant')

      expect(response.body).toEqual(reviewData_test);
  });

});

describe('GET /metaData', () => {

  it('send back status of 200', async function() {
    const response = await request(baseURL)
      .get('/metaData?product_id=71669')
      expect(response.status).toEqual(200);
  });

  it('send back status of 500 if issue', async function() {
    const response = await request(baseURL)
      .get('/metaData')
      expect(response.status).toEqual(500);
  });

  it('sends back data in correct shape', async function() {
    const response = await request(baseURL)
      .get('/metaData?product_id=77777')
      expect(response.body).toEqual(metaData_test);
  })

});


describe('POST /reviews', () => {

  it('responds with 201', async function() {
    const response = await request(baseURL)
      .post(`/reviews?product_id=71669&rating=5&recommend=true&body='test body'&characteristics={}&photos=[]&summary='this is a test summary'&name='test_guy_1'&email='test_guy@gmail.com'`)
      expect(response.status).toEqual(201);
  });

  it('send back status of 500 if issue', async function() {
    const response = await request(baseURL)
      .post('/reviews')
      expect(response.status).toEqual(500);
  })

});

describe('PUT /helpful', () => {

  it('responds with 204', async function() {
    const response = await request(baseURL)
      .put('/helpful?review_id=6')
      expect(response.status).toEqual(204);
  });

  it('send back status of 500 if issue', async function() {
    const response = await request(baseURL)
      .put('/helpful')
      expect(response.status).toEqual(500);
  })

});

describe('PUT /reportReview', () => {

  it('responds with 204', async function() {
    const response = await request(baseURL)
      .put('/reportReview?review_id=9')
      expect(response.status).toEqual(204);
  });

  it('send back status of 500 if issue', async function() {
    const response = await request(baseURL)
      .put('/reportReview')
      expect(response.status).toEqual(500);
  })

});




