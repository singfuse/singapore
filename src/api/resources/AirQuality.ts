import { RealtimeConnector } from '../clients/RealtimeClient'
import { PSI } from '../requests/air-quality/PSI'
import { PM25 } from '../requests/air-quality/PM25'

export class AirQuality {
  constructor(private connector: RealtimeConnector) {}

  public async psi(date?: string, paginationToken?: string) {
    const request = new PSI(date, paginationToken)
    return await this.connector.get(request.endpoint, request.params)
  }

  public async pm25(date?: string, paginationToken?: string) {
    const request = new PM25(date, paginationToken)
    return await this.connector.get(request.endpoint, request.params)
  }
}
