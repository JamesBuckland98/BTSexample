import axios from 'axios';

export default axios.create({
    baseURL: '/routes',
    Headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
});