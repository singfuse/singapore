export class Trending {
    constructor() { }

    public get endpoint(): string {
        return "/rss";
    }

    public get params(): Record<string, any> {
        return {
            geo: 'SG'
        };
    }
}
