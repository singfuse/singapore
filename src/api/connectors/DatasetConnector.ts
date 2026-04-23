import { Connector } from './Connector'

const API_URL = 'https://api-production.data.gov.sg/v2/public/api'

export class DatasetConnector extends Connector {
  constructor() {
    super(API_URL)
  }
}
