import { ViewPort } from "@parsimap/react-mapbox-gl";
import { PlaceType } from "../../MuiGeocodeAutocomplete";

export default interface IMuiGeocodeAutocompleteProps {
  token: string;
  mapViewPort: ViewPort;
  value: PlaceType | null;
  onError?: (stateCode: number) => void;
  onChange: (newValue: PlaceType | null) => void;
}
