import { GoogleTrendsConnector } from '../connectors/GoogleTrendsConnector'
import { Trending } from '../requests/google-search/Trending'

export class GoogleSearch {
  constructor(private connector: GoogleTrendsConnector) {}

  public async trending() {
    const request = new Trending()
    const response = await this.connector.client.get(request.endpoint, {
      searchParams: request.params,
    })
    return await response.json()
  }
}
