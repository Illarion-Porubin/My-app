import axios from 'axios';

export function auth(data) {
  console.log(data, "<<data")
  return axios.post('/api/auth/registration', data)
}

