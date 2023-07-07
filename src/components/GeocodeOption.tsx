import * as React from "react";
import RoomIcon from "@mui/icons-material/Room";
import IGeocodeResult from "../interfaces/IGeocodeResult";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

interface IProps extends React.HTMLAttributes<HTMLLIElement> {
  option: IGeocodeResult["results"][0];
}

const GeocodeOption = ({ option, ...rest }: IProps) => (
  <li {...rest} style={{ padding: 10 }}>
    <RoomIcon sx={{ color: (theme) => theme.palette.grey[500] }} />
    <Stack ml={2}>
      <Typography fontWeight={"bold"} fontSize={13}>
        {option.geo_location.title}
      </Typography>
      <Typography fontSize={12}>{option.description}</Typography>
    </Stack>
  </li>
);

export default GeocodeOption;
