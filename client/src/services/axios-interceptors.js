import axios from 'axios';

const requestInterceptor = axios.interceptors.request.use(
    config => {
        config.headers.Authorization = 'Bearer TOKEN';
        return config;
    },
    error => Promise.reject(error)
);

const responseInterceptor = axios.interceptors.response.use(
    response => response,
    error => Promise.reject(error)
);

export { requestInterceptor, responseInterceptor };
