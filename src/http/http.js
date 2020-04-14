// @ts-check

const axios = require('axios').default;

/**
 * Documentation
 * @param {string} url
 */

function get(url) {
    return axios.get(url);
};

/**
 * @param {string} url
 */

function post(url) {
    return axios.post(url);
}

const http = {
    get: get,
    post: post
};

Object.freeze(http);

export default http;
