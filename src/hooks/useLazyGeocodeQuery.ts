import IGeocodeQuery from "../interfaces/IGeocodeQuery";
import React from "react";
import IGeocodeResult from "../interfaces/IGeocodeResult";

type UseLazyGeocodeQuery = {
  trigger: (arg: IGeocodeQuery) => void;
  result: { data: IGeocodeResult | undefined; isFetching: boolean };
};

export default function useLazyGeocodeQuery(): UseLazyGeocodeQuery {
  const requestId = React.useRef<number>();
  const [isFetching, setIsFetching] = React.useState(false);
  const [data, setData] = React.useState<IGeocodeResult>();

  const trigger = React.useCallback(
    ({ address, lng, lat, token }: IGeocodeQuery) => {
      if (requestId.current) {
        clearTimeout(requestId.current);
      }

      requestId.current = window.setTimeout(() => {
        setIsFetching(true);

        const url = new URL("https://api.parsimap.ir/geocode/forward");
        url.searchParams.append("district", `${lng},${lat}`);
        url.searchParams.append("search_text", address);
        url.searchParams.append("key", token);

        fetch(url.toString())
          .then(async (res) => {
            setData(await res.json());
            setIsFetching(false);
          })
          .catch(() => {
            setData(undefined);
            setIsFetching(true);
          });
      });
    },
    []
  );

  return { trigger, result: { data, isFetching } };
}
