import CollectionClient from '../clients/CollectionClient'
import { Metadata } from '../requests/collections/Metadata'

export class Collection {
  constructor(
    private client: CollectionClient,
    private collectionId: string,
  ) {}

  public async metadata() {
    const request = new Metadata(this.collectionId)
    return await this.client.get(request.endpoint, request.params)
  }
}
