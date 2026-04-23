import Client from './Client'

const API_URL = 'https://trends.google.com/trending'

export default class GoogleTrendsClient extends Client {
  constructor() {
    super(API_URL)
  }
}
