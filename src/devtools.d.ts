import { AxiosResponse } from "axios";

declare class HttpClient {
    constructor();
    public get<T, R = AxiosResponse<T>>(url: string): Promise<R>;
}