import {styled} from "@mui/material/styles";
import {autocompleteClasses, Popper, PopperProps} from "@mui/material";
import React from "react";

const MuiAutocompletePopper = styled((props: PopperProps) => (
  <Popper
    {...props}
    modifiers={[
      {
        name: "offset",
        options: {
          offset: [5, 5],
        },
      },
    ]}
  />
))(({ theme }) => ({
  [`& .${autocompleteClasses.listbox}`]: {
    fontSize: 13,
    [theme.breakpoints.down("sm")]: {
      fontSize: 11,
    },
  },
}));

export default MuiAutocompletePopper;

