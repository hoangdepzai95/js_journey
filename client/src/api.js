import axios from 'axios';
import { isLoggedIn, getAccessToken } from './authService';
import { BASE_API_URL } from './config';

// inital
axios.defaults.baseURL = BASE_API_URL;
axios.interceptors.request.use((config) => {
    if (isLoggedIn()) {
      config.headers = {
        ...config,
        'Beaer': getAccessToken() || 'dfsdfsdfsdfsd',
      };
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
// ---------------------

export default {
  register(username, password) {
    return axios.post('/users', {
      username,
      password,
      extra: 'sdkfsdfsd',
    });
  }
}
