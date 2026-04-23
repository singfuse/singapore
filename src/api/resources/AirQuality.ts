import RealtimeClient from '../clients/RealtimeClient'
import { PSI } from '../requests/air-quality/PSI'
import { PM25 } from '../requests/air-quality/PM25'

export class AirQuality {
  constructor(private client: RealtimeClient) {}

  public async psi(date?: string, paginationToken?: string) {
    const request = new PSI(date, paginationToken)
    return await this.client.get(request.endpoint, request.params)
  }

  public async pm25(date?: string, paginationToken?: string) {
    const request = new PM25(date, paginationToken)
    return await this.client.get(request.endpoint, request.params)
  }
}
