import IGeocodeQuery from "../interfaces/IGeocodeQuery";
import React from "react";
import IGeocodeResult from "../interfaces/IGeocodeResult";

export default function useGeocodeQuery() {
  const requestId = React.useRef<number>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState<IGeocodeResult>();

  const trigger = ({ address, lng, lat, token }: IGeocodeQuery) => {
    if (requestId.current) {
      clearTimeout(requestId.current);
    }

    requestId.current = window.setTimeout(() => {
      setIsLoading(true);
      const url = new URL("https://api.parsimap.ir/geocode/forward");
      url.searchParams.append("district", `${lng},${lat}`);
      url.searchParams.append("search_text", address);
      url.searchParams.append("key", token);
      fetch(url.toString()).then(async (res) => {
        setData(await res.json());
        setIsLoading(false);
      }).catch(() => {
        setData(undefined);
        setIsLoading(true);
      });
    });
  };

  return [trigger, { data, isLoading }]; //, { data, isLoading, error }];
}
