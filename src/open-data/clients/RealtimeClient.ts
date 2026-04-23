import Client from './Client'

const API_URL = 'https://api-open.data.gov.sg/v2/real-time/api'

export default class RealtimeClient extends Client {
  constructor(apiKey?: string) {
    super(API_URL, apiKey)
  }
}
