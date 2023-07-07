import {ViewPort} from "@parsimap/react-mapbox-gl";
import IGeocodePlace from "./IGeocodePlace";

export default interface IMuiGeocodeAutocompleteProps {
  token: string;
  mapViewPort: ViewPort;
  value: IGeocodePlace | null;
  onError?: (stateCode: number) => void;
  onChange: (newValue: IGeocodePlace | null) => void;
}
