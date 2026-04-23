import { Connector } from './Connector'

const API_URL = 'https://trends.google.com/trending'

export class GoogleTrendsConnector extends Connector {
  constructor() {
    super(API_URL)
  }
}
