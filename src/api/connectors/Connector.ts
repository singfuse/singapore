import ky, { KyInstance, SearchParamsOption } from 'ky'

abstract class Connector {
  protected _client: KyInstance

  constructor(protected readonly apiUrl: string) {
    this._client = ky.create({
      prefix: this.apiUrl,
    })
  }

  public get client(): KyInstance {
    return this._client
  }

  public async get(
    endpoint: string,
    searchParams?: SearchParamsOption,
  ): Promise<any> {
    const response = await this._client.get(endpoint, { searchParams })
    return await response.json()
  }
}

export { Connector }
