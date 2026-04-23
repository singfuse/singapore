import ky, { KyInstance, SearchParamsOption } from 'ky'

abstract class Client {
  protected _instance: KyInstance

  constructor(protected readonly apiUrl: string) {
    this._instance = ky.create({
      prefix: this.apiUrl,
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
