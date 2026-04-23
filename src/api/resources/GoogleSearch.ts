import { GoogleTrendsConnector } from '../connectors/GoogleTrendsConnector'
import { Trending } from '../requests/google-search/Trending'

export class GoogleSearch {
  constructor(private connector: GoogleTrendsConnector) {}

  public async trending() {
    const request = new Trending()
    return await this.connector.get(request.endpoint, request.params)
  }
}
