# @singfuse/singapore

[![npm version](https://img.shields.io/npm/v/@singfuse/singapore?logo=npm&logoColor=cc3534&label=version&labelColor=ffffff&color=cc3534)](https://www.npmjs.com/package/@singfuse/singapore)
[![ci](https://github.com/singfuse/singapore/actions/workflows/ci.yml/badge.svg)](https://github.com/singfuse/singapore/actions/workflows/ci.yml)

A TypeScript SDK for Singapore's Open Data and LTA Data Mall APIs.

## Installation

```bash
npm install @singfuse/singapore
# or
yarn add @singfuse/singapore
# or
pnpm add @singfuse/singapore
```

## Usage

### Open Data API

Access real-time datasets from Singapore's open data portal (data.gov.sg), including weather and air quality.

```typescript
import { OpenData } from '@singfuse/singapore'

// Initialize the client (API key is optional for public endpoints)
const openData = new OpenData()

// Fetch Air Quality data (PSI, PM2.5)
const psiData = await openData.airQuality().psi()
const pm25Data = await openData.airQuality().pm25()

// Fetch Weather data
const weather = openData.weather()
const rainfall = await weather.rainfall()
const temperature = await weather.airTemperature()
const forecast = await weather.twoHourForecast()
```

### LTA Data Mall API

Access transport-related datasets from the Land Transport Authority (LTA) Data Mall.

```typescript
import { LtaDataMall } from '@singfuse/singapore'

// Initialize the client with your LTA Data Mall API key
const ltaData = new LtaDataMall('YOUR_API_KEY')

// Use the client to make requests to the LTA Data Mall API
// const response = await ltaData.client().get('/BusArrivalv2', { BusStopCode: '83139' })
```

## Development Setup

To contribute or run the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/singfuse/singapore.git
   cd singapore
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Build the package:**

   ```bash
   pnpm run build
   ```

4. **Run tests:**

   ```bash
   pnpm test
   ```

## Available Scripts

- `pnpm run build` - Build the project using `tsup`.
- `pnpm test` - Run tests using `vitest`.
- `pnpm run format` - Format code using `prettier`.
- `pnpm run typecheck` - Run TypeScript type checking without emitting files.

## License

This project is licensed under the [MIT License](LICENSE).
