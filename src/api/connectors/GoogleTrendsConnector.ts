import ky, { KyInstance } from "ky";

export class GoogleTrendsConnector {
  private _client: KyInstance;

  constructor() {
    this._client = ky.create({
      prefix: this.resolveBaseUrl(),
    });
  }

  public resolveBaseUrl(): string {
    return "https://trends.google.com/trending";
  }

  public get client(): KyInstance {
    return this._client;
  }
}
