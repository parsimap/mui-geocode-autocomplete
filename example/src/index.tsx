import ReactDOM from "react-dom/client";
import React from "react";
import MuiGeocodeAutocomplete, {
  IGeocodePlace,
} from "@parsimap/mui-geocode-autocomplete";
import { ViewPort } from "@parsimap/react-mapbox-gl";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

function App() {
  return (
    <>
      <MuiGeocodeAutocomplete
        token={""}
        mapViewPort={new ViewPort(0, 0, 0)}
        value={null}
        onChange={function (newValue: IGeocodePlace | null): void {}}
      />
    </>
  );
}

root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
