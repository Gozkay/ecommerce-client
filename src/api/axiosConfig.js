import axios from 'axios';

const axiosi = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export default axiosi;