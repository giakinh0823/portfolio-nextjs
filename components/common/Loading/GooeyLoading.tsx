import { Box } from "@mui/material";
import * as React from "react";
import { useAppSelector } from "../../../app/hooks";
import { selectColor } from "../../../redux/color/colorSlice";

export interface IProps {}

export default function GooeyLoading(props: IProps) {
  const color = useAppSelector(selectColor);

  return (
    <Box component="div" className="loadingio-spinner-bean-eater-m6lu73r1u2b">
      <Box component="div" className="ldio-rhib2whce8d">
        <Box component="div">
          <Box component="div" sx={{ backgroundColor: "primary.main" }}></Box>
          <Box component="div" sx={{ backgroundColor: "primary.main" }}></Box>
          <Box component="div" sx={{ backgroundColor: "primary.main" }}></Box>
        </Box>
        <Box component="div">
          <Box component="div" sx={{ backgroundColor: "primary.main" }}></Box>
          <Box component="div" sx={{ backgroundColor: "primary.main" }}></Box>
          <Box component="div" sx={{ backgroundColor: "primary.main" }}></Box>
        </Box>
      </Box>
    </Box>
  );
}
