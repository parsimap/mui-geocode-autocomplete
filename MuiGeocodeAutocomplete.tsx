import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import GeocodeOption from "./src/components/GeocodeOption";
import { autocompleteClasses, IconButton } from "@mui/material";
import MuiRoundedTextField from "./src/components/MuiRoundedTextField";
import SearchIcon from "@mui/icons-material/Search";
import useGeocodeAutocomplete from "./src/hooks/useMuiGeocodeAutocomplete";
import IMuiGeocodeAutocompleteProps from "./src/interfaces/IMuiGeocodeAutocompleteProps";
import IGeocodePlace from "./src/interfaces/IGeocodePlace";

export default function MuiGeocodeAutocomplete(
  props: IMuiGeocodeAutocompleteProps
) {
  const {
    value,
    options,
    inputValue,
    handleChange,
    handleKeyDown,
    handleSearchClick,
    handleInputChange,
  } = useGeocodeAutocomplete(props);

  return (
    <Autocomplete<IGeocodePlace>
      autoComplete
      value={value}
      options={options}
      popupIcon={false}
      includeInputInList
      filterSelectedOptions
      inputValue={inputValue}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      noOptionsText={"نتیجه‌ای یافت نشد"}
      onInputChange={handleInputChange}
      filterOptions={(x) => x}
      getOptionLabel={(option) => option.description}
      isOptionEqualToValue={(option, value) =>
        option.description === value.description
      }
      renderOption={(props, option) => (
        <GeocodeOption {...props} option={option} />
      )}
      sx={{
        [`& .${autocompleteClasses.endAdornment}`]: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
      renderInput={(params) => (
        <MuiRoundedTextField
          {...params}
          label={"آدرس"}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <IconButton
                size={"small"}
                sx={{ mt: -0.5 }}
                onClick={handleSearchClick}
              >
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      )}
    />
  );
}
