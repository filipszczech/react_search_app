import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 5WS5r0U7q7-XYoEB62-7k6fKl1xAIBW5me0s_x2btgI'
    }
});