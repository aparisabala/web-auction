import axios from 'axios';

const remote = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT+'/', 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

remote.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
remote.interceptors.response.use(
  (response) => { if(process.env.NODE_ENV == 'development') console.log(response?.data);return response;},
  (error) => {
    if (error.response) {
      const { status, data } = error.response;
      switch (status) {
        case 400:
          console.error('Bad Request', data);
          break;
        case 401:
          console.error('Unauthorized - maybe redirect to login', data);
          break;
        case 403:
          console.error('Forbidden', data);
          break;
        case 404:
          console.error('Not Found', data);
          break;
        case 500:
          console.error('Internal Server Error', data);
          break;
        default:
          console.error(`Error ${status}`, data);
      }
      return Promise.reject({ status, data });
    } else if (error.request) {
      console.error('No response received', error.request);
      return Promise.reject({ status: null, data: 'No response received' });
    } else {
      console.error('Axios Error', error.message);
      return Promise.reject({ status: null, data: error.message });
    }
  }
);
export default remote;