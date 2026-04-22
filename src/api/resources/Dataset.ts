import { DatasetConnector } from '../connectors/DatasetConnector';
import { InitiateDownload } from '../requests/datasets/InitiateDownload';
import { PollDownload } from '../requests/datasets/PollDownload';

export class Dataset {
    constructor(private connector: DatasetConnector, private datasetId: string) { }

    public async initiateDownload() {
        const request = new InitiateDownload(this.datasetId);
        const response = await this.connector.client.get(request.endpoint, {
            params: request.params,
        });
        return response.data;
    }

    public async pollDownload() {
        const request = new PollDownload(this.datasetId);
        const response = await this.connector.client.get(request.endpoint, {
            params: request.params,
        });
        return response.data;
    }
}
