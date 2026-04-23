import { CollectionConnector } from '../clients/CollectionClient'
import { Metadata } from '../requests/collections/Metadata'

export class Collection {
  constructor(
    private connector: CollectionConnector,
    private collectionId: string,
  ) {}

  public async metadata() {
    const request = new Metadata(this.collectionId)
    return await this.connector.get(request.endpoint, request.params)
  }
}
