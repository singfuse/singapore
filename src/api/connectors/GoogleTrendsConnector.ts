import axios, { AxiosInstance } from 'axios';

export class GoogleTrendsConnector {
    private _client: AxiosInstance;

    constructor() {
        this._client = axios.create({
            baseURL: this.resolveBaseUrl(),
        });
    }

    public resolveBaseUrl(): string {
        return "https://trends.google.com/trending";
    }

    public get client(): AxiosInstance {
        return this._client;
    }
}
