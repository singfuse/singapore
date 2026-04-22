import axios, { AxiosInstance } from 'axios';

export class DatasetConnector {
    private _client: AxiosInstance;

    constructor() {
        this._client = axios.create({
            baseURL: this.resolveBaseUrl(),
        });
    }

    public resolveBaseUrl(): string {
        return "https://api-production.data.gov.sg/v2/public/api";
    }

    public get client(): AxiosInstance {
        return this._client;
    }
}
