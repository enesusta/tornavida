import axios from 'axios';

class SingletonClient {
    constructor() { }
    get(url) {
        return axios.get(url);
    }
    post(url) {
        return axios.post(url);
    }
}

const http = new SingletonClient();

Object.freeze(http);

export default http;
