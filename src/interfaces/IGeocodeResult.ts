import IGeocodePlace from "./IGeocodePlace";

export default interface IGeocodeResult {
  status: "OK" | "UNAUTHORIZED" | "EXPIRED";
  results: IGeocodePlace[];
}
