const nock = require('nock');
const request = require('supertest');
const assert = require('assert');
const baseURL = "http://localhost:8080";
const { reviewData } = require('./tests/reviewData.js');
jest.setTimeout(10000)


// describe("Jest default test", () => {
//   test('Jest is running correclty', () => {
//     const one = 1;
//     expect(one).toBe(1);
//   });
// });

// describe('GET /user', function() {
//   it('responds with json', function(done) {
//     request(app)
//       .get('/user')
//       .auth('username', 'password')
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200, done);
//   });
// });


describe('GET /', () => {

  it('responds with 200', async function() {
    const response = await request(baseURL)
      .get('/')
    expect(response.status).toEqual(200);

  });
});

describe('GET /reviews', () => {

  it('responds with 200', async function() {
    const response = await request(baseURL)
      .get('/reviews?product_id=71669&count=10')
      expect(response.status).toEqual(200);
  }, 10000);

  it('sends back data in correct shape', async function() {
    const response = await request(baseURL)
      .get('/reviews?product_id=71669&count=10')
      expect(response.body).toEqual(reviewData);
  }, 10000)
});


