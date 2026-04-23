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
    return await this.connector.get(request.endpoint, request.params)
  }

  public async fourDayForecast(date?: string, paginationToken?: string) {
    const request = new FourDayForecast(date, paginationToken)
    return await this.connector.get(request.endpoint, request.params)
  }

  public async rainfall(date?: string, paginationToken?: string) {
    const request = new Rainfall(date, paginationToken)
    return await this.connector.get(request.endpoint, request.params)
  }

  public async relativeHumidity(date?: string, paginationToken?: string) {
    const request = new RelativeHumidity(date, paginationToken)
    return await this.connector.get(request.endpoint, request.params)
  }

  public async twentyFourHourForecast(date?: string, paginationToken?: string) {
    const request = new TwentyFourHourForecast(date, paginationToken)
    return await this.connector.get(request.endpoint, request.params)
  }

  public async twoHourForecast(date?: string, paginationToken?: string) {
    const request = new TwoHourForecast(date, paginationToken)
    return await this.connector.get(request.endpoint, request.params)
  }

  public async uvIndex(date?: string, paginationToken?: string) {
    const request = new UVIndex(date, paginationToken)
    return await this.connector.get(request.endpoint, request.params)
  }

  public async windDirection(date?: string, paginationToken?: string) {
    const request = new WindDirection(date, paginationToken)
    return await this.connector.get(request.endpoint, request.params)
  }

  public async windSpeed(date?: string, paginationToken?: string) {
    const request = new WindSpeed(date, paginationToken)
    return await this.connector.get(request.endpoint, request.params)
  }
}
