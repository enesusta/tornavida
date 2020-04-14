import axios from 'axios';

class SingletonClient {
    constructor() { }
    get(url: string) {
        return axios.get(url);
    }
    post(url: string) {
        return axios.post(url);
    }
}

const http: SingletonClient = new SingletonClient();

Object.freeze(http);

export default http;