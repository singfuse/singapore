import { RealtimeConnector } from './connectors/RealtimeConnector';
import { CollectionConnector } from './connectors/CollectionConnector';
import { DatasetConnector } from './connectors/DatasetConnector';
import { GoogleTrendsConnector } from './connectors/GoogleTrendsConnector';
import { AirQuality } from './resources/AirQuality';
import { Collection } from './resources/Collection';
import { Dataset } from './resources/Dataset';
import { GoogleSearch } from './resources/GoogleSearch';
import { Weather } from './resources/Weather';

export class Connector {
    public airQuality(): AirQuality {
        return new AirQuality(new RealtimeConnector());
    }

    public collection(collectionId: string): Collection {
        return new Collection(new CollectionConnector(), collectionId);
    }

    public dataset(datasetId: string): Dataset {
        return new Dataset(new DatasetConnector(), datasetId);
    }

    public googleSearch(): GoogleSearch {
        return new GoogleSearch(new GoogleTrendsConnector());
    }

    public weather(): Weather {
        return new Weather(new RealtimeConnector());
    }
}
