import LtaDataMallClient from './Client'

export class LtaDataMall {
  constructor(private readonly apiKey: string) {}

  private _client: LtaDataMallClient | null = null
  public client(): LtaDataMallClient {
    if (!this._client) {
      this._client = new LtaDataMallClient(this.apiKey)
    }
    return this._client
  }
}
