import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.0.2.2:3333/',
  headers: {
    Authorization:
      'Bearer Ng.w-GVUv40znUmvBDXXeKdvCPdJLb48Cu1cYk2wCMobHmP8r6awas70FHmTSGq',
  },
});
