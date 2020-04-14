import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export default class HttpClient {

    private api: AxiosInstance;
    constructor() { this.api = axios.create() }

    public get<T, R = AxiosResponse<T>>(url: string): Promise<R> {
        return axios.get(url);
    }
}