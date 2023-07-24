import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mg.l61kC2AZwJY72VIm4R8WGnV81D18DMOLVRjdAZ4VRzTsBBxa8mwy2IatnAYa',
  },
});
