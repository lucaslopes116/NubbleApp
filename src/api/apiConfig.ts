import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.0.2.2:3333/',
  headers: {
    Authorization:
      'Bearer NQ.E_u7o3San0JRweNzis-nBqoWBsgUmmn0DI5gJxAXh2zcc3JJeLHw1dQmHlxT',
  },
});
