import * as React from "react";
import IMuiGeocodeAutocompleteProps from "../interfaces/IMuiGeocodeAutocompleteProps";
import IGeocodePlace from "../interfaces/IGeocodePlace";
import useGeocodeQuery from "./useGeocodeQuery";

interface INoOptions {
  type: NoOptionsType;
  accuracyRadius: number;
}

type NoOptionsType = "no-result" | "postcode-error";

export default function useGeocodeAutocomplete({
  token,
  value,
  mapViewPort,
  onChange,
}: IMuiGeocodeAutocompleteProps) {
  const timeoutRef = React.useRef<number>();
  const prevInputValue = React.useRef<string>();
  const [inputValue, setInputValue] = React.useState("");
  const [trigger, { data, isFetching }] = [
    () => {},
    { data: { results: [], status: "" }, isFetching: false },
  ];
  const [options, setOptions] = React.useState<IGeocodePlace[]>([]);
  const [noOptions, setSetNoOptions] = React.useState<INoOptions>({
    type: "no-result",
    accuracyRadius: 0,
  });

  useGeocodeQuery()

  React.useEffect(() => {
    if (!data) {
      return;
    }

    if (data.status === "OK") {
      let newOptions: IGeocodePlace[] = [];

      /**
       * Whether the geocode service has result, to avoid from lost current value
       * is selected, it is necessary to add in the newOptions as first member.
       * This is added to the list and the warning is no show anymore.
       * It is taken to account that added value is not shown in the popover list.
       */
      if (value) {
        newOptions = [value];
      }

      newOptions = [...newOptions, ...data.results].filter(
        (val, idx, self) =>
          self.findIndex((x) => x.description === val.description) === idx
      );

      if (!newOptions.length) {
        setSetNoOptions({ type: "no-result", accuracyRadius: 0 });
      }

      setOptions(newOptions);
    }
  }, [data, value]);

  const fetchGeocode = React.useCallback(() => {
    if (inputValue === "" || prevInputValue.current === inputValue) {
      return;
    }

    prevInputValue.current = inputValue;
    clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      // trigger({
      //   address: inputValue,
      //   token,
      //   zoom: mapViewPort.zoom,
      //   lng: mapViewPort.lng,
      //   lat: mapViewPort.lat,
      // });
    }, 200);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [inputValue, mapViewPort, token, trigger]);

  React.useEffect(() => {
    fetchGeocode();
  }, [fetchGeocode, inputValue]);

  const handleChange = React.useCallback(
    (_: React.SyntheticEvent, newValue: IGeocodePlace | null) => {
      setOptions(newValue ? [newValue, ...options] : options);
      onChange(newValue);
    },
    [onChange, options]
  );

  const handleSearchClick = React.useCallback(() => {
    fetchGeocode();
  }, [fetchGeocode]);

  const handleInputChange = React.useCallback((_: any, newValue: string) => {
    setInputValue(newValue);
  }, []);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter" && options.length) {
        if (isFetching) {
          return;
        }

        /**
         * This code is useful when the user tries to select the first item in the list
         * with press the key entering.
         *
         * At the first time whether option variable length equals to 1, the suitable
         * member is that belongs to index zero, because it's the first time and there isn't
         * any options' member at the list.
         * The first member is the last value, so to show the current location, it
         * needs to choose the next member that is exactly the first item which be
         * shown in the popover component as option value.
         */
        onChange(options.length > 1 ? options[1] : options[0]);
      }
    },
    [isFetching, onChange, options]
  );

  return {
    value,
    options,
    noOptions,
    inputValue,
    isFetching,
    handleChange,
    handleKeyDown,
    handleInputChange,
    handleSearchClick,
  };
}
