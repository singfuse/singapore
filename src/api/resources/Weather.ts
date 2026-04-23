import { RealtimeConnector } from '../connectors/RealtimeConnector'
import { AirTemperature } from '../requests/weather/AirTemperature'
import { FourDayForecast } from '../requests/weather/FourDayForecast'
import { Rainfall } from '../requests/weather/Rainfall'
import { RelativeHumidity } from '../requests/weather/RelativeHumidity'
import { TwentyFourHourForecast } from '../requests/weather/TwentyFourHourForecast'
import { TwoHourForecast } from '../requests/weather/TwoHourForecast'
import { UVIndex } from '../requests/weather/UVIndex'
import { WindDirection } from '../requests/weather/WindDirection'
import { WindSpeed } from '../requests/weather/WindSpeed'

export class Weather {
  constructor(private connector: RealtimeConnector) {}

  public async airTemperature(date?: string, paginationToken?: string) {
    const request = new AirTemperature(date, paginationToken)
    const response = await this.connector.client.get(request.endpoint, {
      searchParams: request.params,
    })
    return await response.json()
  }

  public async fourDayForecast(date?: string, paginationToken?: string) {
    const request = new FourDayForecast(date, paginationToken)
    const response = await this.connector.client.get(request.endpoint, {
      searchParams: request.params,
    })
    return await response.json()
  }

  public async rainfall(date?: string, paginationToken?: string) {
    const request = new Rainfall(date, paginationToken)
    const response = await this.connector.client.get(request.endpoint, {
      searchParams: request.params,
    })
    return await response.json()
  }

  public async relativeHumidity(date?: string, paginationToken?: string) {
    const request = new RelativeHumidity(date, paginationToken)
    const response = await this.connector.client.get(request.endpoint, {
      searchParams: request.params,
    })
    return await response.json()
  }

  public async twentyFourHourForecast(date?: string, paginationToken?: string) {
    const request = new TwentyFourHourForecast(date, paginationToken)
    const response = await this.connector.client.get(request.endpoint, {
      searchParams: request.params,
    })
    return await response.json()
  }

  public async twoHourForecast(date?: string, paginationToken?: string) {
    const request = new TwoHourForecast(date, paginationToken)
    const response = await this.connector.client.get(request.endpoint, {
      searchParams: request.params,
    })
    return await response.json()
  }

  public async uvIndex(date?: string, paginationToken?: string) {
    const request = new UVIndex(date, paginationToken)
    const response = await this.connector.client.get(request.endpoint, {
      searchParams: request.params,
    })
    return await response.json()
  }

  public async windDirection(date?: string, paginationToken?: string) {
    const request = new WindDirection(date, paginationToken)
    const response = await this.connector.client.get(request.endpoint, {
      searchParams: request.params,
    })
    return await response.json()
  }

  public async windSpeed(date?: string, paginationToken?: string) {
    const request = new WindSpeed(date, paginationToken)
    const response = await this.connector.client.get(request.endpoint, {
      searchParams: request.params,
    })
    return await response.json()
  }
}
