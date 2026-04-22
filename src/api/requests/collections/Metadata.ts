export class Metadata {
    constructor(private collectionId: string) { }

    public get endpoint(): string {
        return `/collections/${this.collectionId}/metadata`;
    }

    public get params(): Record<string, any> {
        return {};
    }
}
