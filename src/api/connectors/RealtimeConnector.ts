import { Connector } from './Connector'

const API_URL = 'https://api-open.data.gov.sg/v2/real-time/api'

export class RealtimeConnector extends Connector {
  constructor() {
    super(API_URL)
  }
}
