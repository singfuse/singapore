import ky, { KyInstance, SearchParamsOption } from 'ky'

abstract class Client {
  protected _instance: KyInstance

  constructor(
    protected readonly apiUrl: string,
    protected readonly apiKey?: string,
  ) {
    const headers: Record<string, string> = {}
    if (this.apiKey) headers['X-Api-Key'] = this.apiKey
    this._instance = ky.create({
      prefix: this.apiUrl,
      headers,
    })
  }

  public get client(): KyInstance {
    return this._instance
  }

  public async get(
    endpoint: string,
    searchParams?: SearchParamsOption,
  ): Promise<any> {
    const response = await this._instance.get(endpoint, { searchParams })
    return await response.json()
  }
}

export default Client
