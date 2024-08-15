import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://66be3d9f74dfc195586ef948.mockapi.io',
});

export default axiosInstance;
