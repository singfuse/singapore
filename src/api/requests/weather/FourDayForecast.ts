export class FourDayForecast {
    constructor(private date?: string, private paginationToken?: string) { }

    public get endpoint(): string {
        return "/4-day-forecast";
    }

    public get params(): Record<string, any> {
        const params: Record<string, any> = {};
        if (this.date) params.date = this.date;
        if (this.paginationToken) params.paginationToken = this.paginationToken;
        return params;
    }
}
