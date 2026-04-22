import axios, { AxiosInstance } from 'axios';

export class RealtimeConnector {
    private _client: AxiosInstance;

    constructor() {
        this._client = axios.create({
            baseURL: this.resolveBaseUrl(),
        });
    }

    public resolveBaseUrl(): string {
        return "https://api-open.data.gov.sg/v2/real-time/api";
    }

    public get client(): AxiosInstance {
        return this._client;
    }
}
