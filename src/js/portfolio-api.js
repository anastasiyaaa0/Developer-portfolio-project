import axios from 'axios';

export async function getData() {
  const BASE_URL = 'https://portfolio-js.b.goit.study';
  const END_POINT = '/api/reviews';
  const url = `${BASE_URL}${END_POINT}`;
  const res = await axios.get(url);
  return res.data;
}

export async function postData(data) {
  const BASE_URL = 'https://portfolio-js.b.goit.study';
  const END_POINT = '/api/requests';
  const url = `${BASE_URL}${END_POINT}`;
  const res = await axios.post(url, data);
  return res;
}
