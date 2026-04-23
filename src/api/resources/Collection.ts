import { CollectionConnector } from '../connectors/CollectionConnector'
import { Metadata } from '../requests/collections/Metadata'

export class Collection {
  constructor(
    private connector: CollectionConnector,
    private collectionId: string,
  ) {}

  public async metadata() {
    const request = new Metadata(this.collectionId)
    const response = await this.connector.client.get(request.endpoint, {
      searchParams: request.params,
    })
    return await response.json()
  }
}
