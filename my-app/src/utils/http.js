import axios from 'axios';
import environment from '../environment';

const http = axios.create ({
    baseURL: environment.url,
    headers: {'Content-Type': 'application/json'}
});

http.interceptors.request.use (
    (config) => {
        config.headers.Authorization = `Bearer ${environment.token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default http;