import ky, { KyInstance } from 'ky'

export class DatasetConnector {
  private _client: KyInstance

  constructor() {
    this._client = ky.create({
      prefix: this.resolveBaseUrl(),
    })
  }

  public resolveBaseUrl(): string {
    return 'https://api-production.data.gov.sg/v2/public/api'
  }

  public get client(): KyInstance {
    return this._client
  }
}
