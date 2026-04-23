import { RealtimeConnector } from '../connectors/RealtimeConnector'
import { PSI } from '../requests/air-quality/PSI'
import { PM25 } from '../requests/air-quality/PM25'

export class AirQuality {
  constructor(private connector: RealtimeConnector) {}

  public async psi(date?: string, paginationToken?: string) {
    const request = new PSI(date, paginationToken)
    const response = await this.connector.client.get(request.endpoint, {
      searchParams: request.params,
    })
    return await response.json()
  }

  public async pm25(date?: string, paginationToken?: string) {
    const request = new PM25(date, paginationToken)
    const response = await this.connector.client.get(request.endpoint, {
      searchParams: request.params,
    })
    return await response.json()
  }
}
