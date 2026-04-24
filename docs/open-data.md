# Open Data (data.gov.sg)

The `OpenData` class provides an interface to access real-time datasets and APIs from the Singapore government's open data portal ([data.gov.sg](https://data.gov.sg)).

## Initialization

```typescript
import { OpenData } from '@singfuse/singapore'

// Initialize the client (API key is optional for public endpoints)
const openData = new OpenData()
```

## Available Resources

### Weather

Access real-time weather data and forecasts.

```typescript
const weather = openData.weather()

// Real-time rainfall data
const rainfall = await weather.rainfall()

// Real-time air temperature
const temperature = await weather.airTemperature()

// 2-hour weather forecast
const forecast = await weather.twoHourForecast()
```

### Air Quality

Access PSI and PM2.5 readings.

```typescript
const airQuality = openData.airQuality()

// Fetch PSI data
const psiData = await airQuality.psi()

// Fetch PM2.5 data
const pm25Data = await airQuality.pm25()
```

### Datasets and Collections

You can also access specific datasets and collections by their ID.

```typescript
// Access a dataset
const dataset = openData.dataset('YOUR_DATASET_ID')

// Access a collection
const collection = openData.collection('YOUR_COLLECTION_ID')
```

### Google Search Trends

Access Google search trends related to Singapore open data.

```typescript
const search = openData.googleSearch()
```
