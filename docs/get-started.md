# Get Started

Welcome to the **Singapore Data SDK**! This unofficial TypeScript/JavaScript SDK provides a unified interface to access various Singapore Government open datasets, including:

- **Open Data (data.gov.sg)**: Weather, Air Quality, Datasets, and Collections.
- **LTA DataMall**: Transport-related datasets like bus arrivals, traffic, and more.
- **Static Data**: Geography, administrative boundaries (regions, areas, subzones), and postal districts.

## Installation

You can install the SDK via your preferred package manager:

::: code-group

```bash [npm]
npm install @singfuse/singapore
```

```bash [yarn]
yarn add @singfuse/singapore
```

```bash [pnpm]
pnpm add @singfuse/singapore
```

:::

## Overview

The SDK exports three primary modules corresponding to the data sources:

1. `OpenData` - For data.gov.sg real-time APIs.
2. `LtaDataMall` - For Land Transport Authority APIs.
3. Static Data constants - Direct exports of various static sets (`regions`, `areas`, `subzones`, `postalDistricts`).

Check the sidebar for detailed documentation on each data source.
