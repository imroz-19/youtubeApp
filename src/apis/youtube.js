import axios from 'axios';
const KEY = "AIzaSyB0wRQFPnC5sHdzCAQLjLu667i_JbRDhrA";

export default axios.create({
    baseURL: ' https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})