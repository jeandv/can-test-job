import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTA0ZjU4ZGYxNmYyMmZkYzRkOTc5ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTczODU0NiwiZXhwIjoxNjc1OTk3NzQ2fQ.4-aSLPzhsc8AxX4kQejMw20y4ny3EgV7DIObgHle-9c';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` }
});