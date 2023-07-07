import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MuiRoundedTextField from "./MuiRoundedTextField";
import * as React from "react";
import IMuiAutocompleteProps from "../interfaces/IMuiAutocompleteProps";
import Autocomplete from "@mui/material/Autocomplete";
import MuiAutocompletePopper from "./MuiAutocompletePopper";

const MuiAutocomplete = ({
  textFieldLabel,
  ...rest
}: IMuiAutocompleteProps) => (
  <Autocomplete
    fullWidth
    autoComplete
    size={"small"}
    includeInputInList
    PopperComponent={MuiAutocompletePopper}
    popupIcon={
      <KeyboardArrowDownIcon
        sx={{
          fontSize: 20,
        }}
      />
    }
    renderInput={(params) => (
      <MuiRoundedTextField {...params} label={textFieldLabel} />
    )}
    {...rest}
  />
);

export default MuiAutocomplete;
