import axios from 'axios';

axios.interceptors.request.use(
  function (config) {
    config.metadata = { startTime: new Date() };
    console.log('Request sent at:', config.metadata.startTime);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    const endTime = new Date();
    const duration = endTime - response.config.metadata.startTime;
    console.log(`Response received in ${duration} ms`);
    return response;
  },
  function (error) {
    const endTime = new Date();
    const duration = endTime - error.config.metadata.startTime;
    console.error(`Error after ${duration} ms`);
    return Promise.reject(error);
  }
);

const {
  data: { articles },
} = await axios.get('/api/data/articles?timeout=3000');

document.querySelector('#data').innerHTML = articles[0].content;
