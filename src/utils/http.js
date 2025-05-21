// src/utils/http.js
import axios from 'axios';

// 创建 axios 实例
const service = axios.create({
    baseURL: 'http://v4.unarem.buzz:3000/api', // 基础请求地址
    timeout: 5000, // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
    config => {
        // 在发送请求之前可以添加一些操作，比如添加 token
        // config.headers['Authorization'] = 'Bearer ' + token;
        // 跨域
        config.withCredentials = true;
        return config;
    },
    error => {
        // 处理请求错误
        return Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    response => {
        // 对响应数据进行处理
        return response.data;
    },
    error => {
        // 处理响应错误
        console.error('Error: ', error.response);
        return Promise.reject(error);
    }
);

// 导出封装的 axios 实例
export default service;