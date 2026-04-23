import BaseClient from '../BaseClient'

const API_URL = 'https://datamall2.mytransport.sg/ltaodataservice/v2'

export default class LtaDataMallClient extends BaseClient {
  constructor(apiKey: string) {
    super(API_URL, { AccountKey: apiKey })
  }
}
