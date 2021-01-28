import axios, { Method } from "axios";
import { CLIENT_ID, CLIENT_SECRET} from './auth';
import qs from 'qs';
import history from "./history";


type RequestParams = {
    method?: Method;
    url: String;
    data?: object | string;
    params?: object;
    headers?: object;
}

type LoginData = {
    username: string;
    password: string;
}

const BASE_URL = process.env.RECT_APP_BACKEND_URL ?? 'http://localhost:8080';

export const makeRequest = ({ method = 'GET', url, data, params, headers }: RequestParams) => {
    return axios({
        method,
        url: `${BASE_URL}${url}`,
        data,
        params,
        headers
    });
}

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response.status === 401) {
        history.push('/auth/login');
        
    }
    return Promise.reject(error);
});

export const makeLogin = (loginData: LoginData) => {
    const token = `${CLIENT_ID}:${CLIENT_SECRET}`;
    
    const headers = {
        Authorization: `Basic ${window.btoa(token)}`,
        'Content-Type': 'application/x-www-form-urlencoded',
    }

    // '/oauth/token'
    // username = maria@gmail.com&password=123456&grant_type=password
    const payload = qs.stringify({ ...loginData, grant_type: 'password' });
    return makeRequest({ url: '/oauth/token', data: payload, method: 'POST', headers });
}