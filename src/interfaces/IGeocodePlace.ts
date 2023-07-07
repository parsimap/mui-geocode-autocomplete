export default interface IGeocodePlace {
  geo_location: {
    center: {
      lat: number;
      lng: number;
    };
    south_west: {
      lat: number;
      lng: number;
    };
    north_east: {
      lat: number;
      lng: number;
    };
    title: string;
  };
  description: string;
}