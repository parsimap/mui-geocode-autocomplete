# Persistent Drawer

An autocomplete for MUI is enhanced by parsimap geocode service.

# Arguments

| title   | type     | default     | description                    |
|---------|----------|-------------|--------------------------------|
| `token` | `string` | `undefined` | A generated token by map token |

## Optional Arguments

| title         | type       | default     | description                               |
|---------------|------------|-------------|-------------------------------------------|
| `value`       | `IPlace`   | `undefined` | A searched result item as a geocode place |
| `mapViewPort` | `ViewPort` | `undefined` | A viewPort which is retrieved from map    |
| `onChange`    | `function` | `undefined` | update value can be accessed              |

## Changelog

### version `1.0.0`

* The documentation is rewrite in the case of separation the optional and required arguments.

## Usage

```tsx
import MuiGeocodeAutocomplete, {IGeocodePlace} from '@parsimap/mui-geocode-autocomplete';

const App = () => {
  function handleGeocode(state: IGeocodePlace) {

  }

  return (
    <MuiGeocodeAutocomplete
      token={token}
      value={place}
      mapViewPort={viewPort}
      onChange={handleGeocode}
    />
  )
}

export default App;
```