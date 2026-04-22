export class InitiateDownload {
    constructor(private datasetId: string) { }

    public get endpoint(): string {
        return `/datasets/${this.datasetId}/initiate-download`;
    }

    public get params(): Record<string, any> {
        return {};
    }
}
