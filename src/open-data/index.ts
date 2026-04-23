import RealtimeClient from './clients/RealtimeClient'
import CollectionClient from './clients/CollectionClient'
import DatasetClient from './clients/DatasetClient'
import GoogleTrendsClient from './clients/GoogleTrendsClient'
import { AirQuality } from './resources/AirQuality'
import { Collection } from './resources/Collection'
import { Dataset } from './resources/Dataset'
import { GoogleSearch } from './resources/GoogleSearch'
import { Weather } from './resources/Weather'

/**
 * Singapore government datasets and APIs from open data portal.
 * https://data.gov.sg
 */
export class OpenData {
  constructor(private readonly apiKey?: string) {}

  private _realtimeClient: RealtimeClient | null = null
  public realtimeClient(): RealtimeClient {
    if (!this._realtimeClient) {
      this._realtimeClient = new RealtimeClient(this.apiKey)
    }
    return this._realtimeClient
  }

  private _collectionClient: CollectionClient | null = null
  public collectionClient(): CollectionClient {
    if (!this._collectionClient) {
      this._collectionClient = new CollectionClient(this.apiKey)
    }
    return this._collectionClient
  }

  private _datasetClient: DatasetClient | null = null
  public datasetClient(): DatasetClient {
    if (!this._datasetClient) {
      this._datasetClient = new DatasetClient(this.apiKey)
    }
    return this._datasetClient
  }

  private _googleTrendsClient: GoogleTrendsClient | null = null
  public googleTrendsClient(): GoogleTrendsClient {
    if (!this._googleTrendsClient) {
      this._googleTrendsClient = new GoogleTrendsClient(this.apiKey)
    }
    return this._googleTrendsClient
  }

  private _airQuality: AirQuality | null = null
  public airQuality(): AirQuality {
    if (!this._airQuality) {
      this._airQuality = new AirQuality(this.realtimeClient())
    }
    return this._airQuality
  }

  private _collection: Collection | null = null
  public collection(collectionId: string): Collection {
    if (!this._collection) {
      this._collection = new Collection(this.collectionClient(), collectionId)
    }
    return this._collection
  }

  private _dataset: Dataset | null = null
  public dataset(datasetId: string): Dataset {
    if (!this._dataset) {
      this._dataset = new Dataset(this.datasetClient(), datasetId)
    }
    return this._dataset
  }

  private _googleSearch: GoogleSearch | null = null
  public googleSearch(): GoogleSearch {
    if (!this._googleSearch) {
      this._googleSearch = new GoogleSearch(this.googleTrendsClient())
    }
    return this._googleSearch
  }

  private _weather: Weather | null = null
  public weather(): Weather {
    if (!this._weather) {
      this._weather = new Weather(this.realtimeClient())
    }
    return this._weather
  }
}

export {
  AirQuality,
  Collection,
  Dataset,
  GoogleSearch,
  Weather,
} from './resources'
