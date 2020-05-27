import axios from 'axios';

const api = axios.create({
    baseURL: 'http://51.79.44.6:56789/'
})

export default api;