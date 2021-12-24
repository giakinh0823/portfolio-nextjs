import * as React from "react";
import { styled, Button } from "@mui/material";

const ColorButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
}));

const ButtonPrimary = (props: any) => {
  const { color, darkColor, lightColor, boxShadow, textColor, sx, ...orther } =
    props;
  return (
    <ColorButton
      {...orther}
      sx={{
        bgcolor: color ? color : "primary.main",
        boxShadow: boxShadow
          ? boxShadow
          : "rgb(33 150 243 / 30%) 0px 12px 14px 0px",
        "&:hover": {
          bgcolor: darkColor ? darkColor : "#2f64ff",
        },
        "&:active": {
          bgcolor: lightColor ? lightColor : "#5c85ff",
        },
        color: "white",
        ...sx,
      }}
      variant="contained"
    >
      {props.children}
    </ColorButton>
  );
};

export default React.memo(ButtonPrimary);
