import { Container, Link as MuiLink, Radio, Slide, Stack } from "@mui/material";
import { Box } from "@mui/system";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectMode } from "../../../redux/mode/modeSlice";
import UseSwitchesCustom from "../SwitchDarkMode";
import { ROUTE_LIST } from "./routes";
import { colorAction, selectColor } from '../../../redux/color/colorSlice';

export const HeaderDesktop = () => {
  const router = useRouter();
  const [fixed, setFixed] = React.useState(false);
  const mode = useAppSelector(selectMode);
  const color = useAppSelector(selectColor)
  const dispatch = useAppDispatch();
  const [selectedValue, setSelectedValue] = React.useState(color);

  React.useEffect(() => {
    dispatch(colorAction.getColor());
  }, [dispatch])

  React.useEffect(() => {
    setSelectedValue(color);
  },[color])

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 54) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <Slide direction="down" in={true}>
      <Box
        display={{ xs: "none", md: "block" }}
        py={2}
        sx={
          fixed
            ? {
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 1000,
                width: "100%",
                backgroundColor: mode == "dark" ? "#121212" : "white",
                boxShadow:
                  mode == "dark" ? "none" : "0 2px 28px 0 rgba(0, 0, 0, 0.08)",
                "@keyframes slideInDown": {
                  from: {
                    transform: "translateY(-100%)",
                  },
                  to: {
                    transform: "translateY(0)",
                  },
                },
                animation: "slideInDown 0.5s",
              }
            : {}
        }
      >
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
            <Stack direction="row" ml={2} alignItems="center">
              {ROUTE_LIST.map((route) => (
                <Link key={route.path} href={route.path} passHref>
                  <MuiLink
                    sx={{ ml: 4, fontWeight: "bold", fontSize: "1.1rem" }}
                    className={clsx({ active: router.pathname === route.path })}
                  >
                    {route.label}
                  </MuiLink>
                </Link>
              ))}
              <Stack alignItems="center" ml={3} direction="row" spacing={1}>
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
                  {...controlProps("#ff7e29")}
                  sx={{
                    color: "#ff7e29",
                    "&.Mui-checked": {
                      color: "#ff7e29",
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
                <UseSwitchesCustom />
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Slide>
  );
};
