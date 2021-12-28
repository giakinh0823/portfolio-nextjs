import { pink, red, teal } from "@mui/material/colors";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider
} from "@mui/material/styles";
import * as React from "react";
import { ToastContainer } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { colorAction, selectColor } from "../../redux/color/colorSlice";
import { modeAction, selectMode } from "../../redux/mode/modeSlice";

export default function ToggleColorMode({ children }: any) {
  const mode = useAppSelector(selectMode);
  const color = useAppSelector(selectColor);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(modeAction.getMode());
    dispatch(colorAction.getColor());
  }, [dispatch]);


  let theme = React.useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        },
        palette: {
          mode: mode == "dark" ? "dark" : "light",
          primary: {
            main: color,
          },
          secondary: {
            main: teal.A400,
          },
          error: {
            main: red.A400,
          },
        },
        components: {
          MuiContainer: {
            defaultProps: {
              maxWidth: "lg",
            },
          },
          MuiLink: {
            defaultProps: {
              underline: "none",
            },
            styleOverrides: {
              root: {
                color: mode == "dark" ? "white" : "#171717",

                "&:hover, &.active": {
                  color: color,
                },
              },
            },
          },
        },
      }),
    [mode, color]
  );
  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={mode as any}
      />
    </ThemeProvider>
  );
}
