import axios from 'axios';
import { configuration } from '../constants';

// create axios for server call and headers
const axiosInstance = axios.create({
  baseURL: configuration.API_URL
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
);

// Add a response interceptor for globale notifications and responce log
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.log('error--->', error);
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    if (error.request) {
      return Promise.reject(new Error('Server not responding'));
    }
    return Promise.reject(new Error('Something went wrong'));
  }
);

export default axiosInstance;
