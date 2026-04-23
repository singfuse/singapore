import ky, { KyInstance } from "ky";

export class RealtimeConnector {
  private _client: KyInstance;

  constructor() {
    this._client = ky.create({
      prefix: this.resolveBaseUrl(),
    });
  }

  public resolveBaseUrl(): string {
    return "https://api-open.data.gov.sg/v2/real-time/api";
  }

  public get client(): KyInstance {
    return this._client;
  }
}
