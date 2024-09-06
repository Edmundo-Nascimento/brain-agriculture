import axios from 'axios';

const api = axios.create({
  baseURL: 'https://brain-agriculture-api.com',
});

export default api;
