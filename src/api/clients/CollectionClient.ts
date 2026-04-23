import Client from './Client'

const API_URL = 'https://api-production.data.gov.sg/v2/public/api'

export default class CollectionClient extends Client {
  constructor(apiKey?: string) {
    super(API_URL, apiKey)
  }
}
