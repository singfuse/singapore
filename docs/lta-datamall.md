# LTA DataMall

The `LtaDataMall` class allows you to interact with the Land Transport Authority (LTA) DataMall APIs, providing access to real-time transport datasets.

## Initialization

You will need an LTA DataMall API key to access these endpoints. You can request one from the [LTA DataMall website](https://datamall.lta.gov.sg/).

```typescript
import { LtaDataMall } from '@singfuse/singapore'

// Initialize the client with your LTA DataMall API key
const ltaData = new LtaDataMall('YOUR_API_KEY')
```

## Usage

Use the client to make requests to any available LTA DataMall API endpoints.

```typescript
// Fetch bus arrival data for a specific bus stop
const response = await ltaData.client().get('/BusArrivalv2', {
  BusStopCode: '83139',
})

console.log(response)
```

Refer to the [LTA DataMall API documentation](https://datamall.lta.gov.sg/content/datamall/en/dynamic-data.html) for a full list of available endpoints and query parameters.
