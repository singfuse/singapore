import DatasetClient from '../clients/DatasetClient'
import { InitiateDownload } from '../requests/datasets/InitiateDownload'
import { PollDownload } from '../requests/datasets/PollDownload'

export class Dataset {
  constructor(
    private client: DatasetClient,
    private datasetId: string,
  ) {}

  public async initiateDownload() {
    const request = new InitiateDownload(this.datasetId)
    return await this.client.get(request.endpoint, request.params)
  }

  public async pollDownload() {
    const request = new PollDownload(this.datasetId)
    return await this.client.get(request.endpoint, request.params)
  }
}
