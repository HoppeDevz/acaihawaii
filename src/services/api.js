import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:56789/'
})

export default api;
