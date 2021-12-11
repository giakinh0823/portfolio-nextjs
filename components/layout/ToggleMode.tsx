import { red } from "@mui/material/colors";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectMode, modeAction } from "../../redux/mode/modeSlice";
import { ToastContainer } from "react-toastify";

export default function ToggleColorMode({ children }: any) {
  const mode = useAppSelector(selectMode);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(modeAction.getMode());
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
            main: "#3766f4",
          },
          secondary: {
            main: "#8072e0",
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
                  color: "#3766f4",
                },
              },
            },
          },
        },
      }),
    [mode]
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
