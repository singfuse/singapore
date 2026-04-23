import Client from './Client'

const API_URL = 'https://api-production.data.gov.sg/v2/public/api'

export default class DatasetClient extends Client {
  constructor() {
    super(API_URL)
  }
}
