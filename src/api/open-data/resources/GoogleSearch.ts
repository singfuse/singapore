import GoogleTrendsClient from '../clients/GoogleTrendsClient'
import { Trending } from '../requests/google-search/Trending'

export class GoogleSearch {
  constructor(private client: GoogleTrendsClient) {}

  public async trending() {
    const request = new Trending()
    return await this.client.get(request.endpoint, request.params)
  }
}
