import http from 'k6/http';
import { sleep } from 'k6';
// const url = 'http://localhost:8080';

export const options = {
  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      rate: 1000,
      timeUnit: '1s', // 1000 iterations per second, i.e. 1000 RPS
      duration: '1m',
      preAllocatedVUs: 5000, // how large the initial pool of VUs would be
      maxVUs: 6000, // if the preAllocatedVUs are not enough, we can initialize more
    },
  },
};


export default function () {
  // const url = 'http://localhost:8080';
  // let data =
  // {
  //   product_id: 77772,
  //   rating: 5,
  //   recommend: true,
  //   body: 'this is stress test body',
  //   characteristics: {},
  //   photos: [],
  //   summary: 'this is stress test summary',
  //   name: 'stressMan',
  //   email: 'stress@gmail.com'
  // };

  const url = `http://localhost:8080/reviews?product_id=71669&count=10&sort=relevant`;

  http.get(url)

  sleep(1);

}






