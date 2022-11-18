import axios from 'axios';
// import axios from './lib/axios.js';

const api = axios.create({
    baseURL : "https://supplyapi.tripbox.co.kr",
    headers : {"Accept" : "application/json"}
}) 


api.interceptors.request.use(function (config) {
    // Do something before request is sent
   // console.log("request start",config);
    return config;
  }, function (error) {
    // Do something with request error
    //console.log("request start error",error);
    return Promise.reject(error);
  });

  api.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    //console.log("response",response);
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    //console.log("response error",error);
    return Promise.reject(error);
  });

  export default api;