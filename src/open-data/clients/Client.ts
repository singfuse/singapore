import ky, { KyInstance, SearchParamsOption } from 'ky'

abstract class Client {
  protected _instance: KyInstance

  constructor(
    protected readonly apiUrl: string,
    protected readonly apiKey?: string,
  ) {
    if (!apiUrl) throw new Error('apiUrl is required')

    const headers: Record<string, string> = {}
    if (this.apiKey) headers['X-Api-Key'] = this.apiKey
    this._instance = ky.create({
      prefix: this.apiUrl,
      headers,
      timeout: 8000,
      retry: {
        limit: 1,
        statusCodes: [408, 413, 429, 500, 502, 503, 504],
      },
      throwHttpErrors: true,
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
