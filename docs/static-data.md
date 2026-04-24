# Static Data

The SDK also bundles various static geographical and administrative datasets. This allows you to quickly access information without needing to perform network requests.

## Usage

You can import these datasets directly from the package:

```typescript
import { regions, areas, subzones, postalDistricts } from '@singfuse/singapore'
```

### Available Datasets

- **`regions`**: Singapore's main geographical regions (e.g., Central, East, North, North-East, West).
- **`areas`**: Planning areas designated by the Urban Redevelopment Authority (URA) (e.g., Ang Mo Kio, Bedok, Clementi).
- **`subzones`**: Smaller subzones within the planning areas.
- **`postalDistricts`**: Singapore's postal districts mapping.

### Example

```typescript
import { regions } from '@singfuse/singapore'

console.log(regions)
// [
//   { id: 'central', name: 'Central Region' },
//   ...
// ]
```
