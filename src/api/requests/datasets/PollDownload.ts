export class PollDownload {
    constructor(private datasetId: string) { }

    public get endpoint(): string {
        return `/datasets/${this.datasetId}/poll-download`;
    }

    public get params(): Record<string, any> {
        return {};
    }
}
