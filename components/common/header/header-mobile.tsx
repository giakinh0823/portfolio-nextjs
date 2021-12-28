import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {
  Container,
  Drawer,
  IconButton,
  Link as MuiLink,
  Stack,
} from "@mui/material";
import { Box } from "@mui/system";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectMode } from "../../../redux/mode/modeSlice";
import UseSwitchesCustom from "../SwitchDarkMode";
import { ROUTE_LIST } from "./routes";
import { Radio } from "@mui/material";
import { colorAction, selectColor } from "../../../redux/color/colorSlice";

export interface HeaderMobileProps {}

export function HeaderMobile(props: HeaderMobileProps) {
  const router = useRouter();
  const mode = useAppSelector(selectMode);
  const [isOpen, setIsOpen] = React.useState(false);
  const color = useAppSelector(selectColor);
  const dispatch = useAppDispatch();
  const [selectedValue, setSelectedValue] = React.useState(color);

  React.useEffect(() => {
    dispatch(colorAction.getColor());
  }, [dispatch]);

  React.useEffect(() => {
    setSelectedValue(color);
  }, [color]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(colorAction.changeColor(event.target.value));
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color",
    inputProps: { "aria-label": item },
  });

  return (
    <Box display={{ xs: "block", md: "none" }}>
      <Box py={2} sx={{}}>
        <Container>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Link href={"/"} passHref>
                <MuiLink>
                  <Stack direction="row" alignItems="center">
                    <Box component="span" sx={{ fontSize: "1.2rem" }}>
                      👋
                    </Box>
                    <Box sx={{ ml: 1, fontWeight: "bold", fontSize: "1.2rem" }}>
                      Kính G.
                    </Box>
                  </Stack>
                </MuiLink>
              </Link>
            </Box>
            <Stack direction="row">
              <IconButton onClick={() => setIsOpen(true)}>
                <MenuOutlinedIcon sx={{ fontSize: "30px" }} />
              </IconButton>
              <Stack alignItems="center" direction="row">
                <UseSwitchesCustom />
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box sx={{ minWidth: "250px", padding: "30px 0" }}>
          <Stack direction="column" alignItems="center">
            <Stack spacing={2} direction="row">
              <Radio
                {...controlProps("#3766f4")}
                sx={{
                  color: "#3766f4",
                  "&.Mui-checked": {
                    color: "#3766f4",
                  },
                }}
              />
              <Radio
                {...controlProps("#ff5722")}
                sx={{
                  color: "#ff5722",
                  "&.Mui-checked": {
                    color: "#ff5722",
                  },
                }}
              />
              <Radio
                {...controlProps("#fa3c4c")}
                sx={{
                  color: "#fa3c4c",
                  "&.Mui-checked": {
                    color: "#fa3c4c",
                  },
                }}
              />
            </Stack>
            {ROUTE_LIST.map((route, index) => (
              <Box key={index} sx={{ padding: "15px 0" }}>
                <Link key={route.path} href={route.path} passHref>
                  <MuiLink
                    sx={{ fontWeight: "bold", fontSize: "1.1rem" }}
                    className={clsx({
                      active: router.pathname === route.path,
                    })}
                  >
                    {route.label}
                  </MuiLink>
                </Link>
              </Box>
            ))}
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
}
