import * as React from "react";
import TextField from "@mui/material/TextField";
import { TextFieldProps } from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";

interface IProps extends Omit<TextFieldProps, "variant"> {}

const MuiRoundedTextField = ({ ...rest }: IProps) => (
  <TextField
    {...rest}
    variant={"outlined"}
    InputProps={{
      ...rest.InputProps,
    }}
    sx={(theme) => ({
      [`& .${outlinedInputClasses.root}`]: {
        pl: 1,
        borderRadius: 8,
        backgroundColor: "rgb(249,249,249)",
        pr: `${theme.spacing(2)} !important`,
      },
      [`& .${outlinedInputClasses.input}`]: {
        mt: 0.5,
        fontSize: 12,
        fontWeight: "bold",
        color: (theme) => theme.palette.primary.main,
        [theme.breakpoints.down("sm")]: {
          fontSize: 11,
        },
      },
      ...rest.sx,
    })}
  />
);

export default MuiRoundedTextField;
