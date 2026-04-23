import BaseClient from '../../BaseClient'

abstract class OpenDataClient extends BaseClient {
  constructor(apiUrl: string, apiKey?: string) {
    super(apiUrl, apiKey ? { 'X-Api-Key': apiKey } : {})
  }
}

export default OpenDataClient
