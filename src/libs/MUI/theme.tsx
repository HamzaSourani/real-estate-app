import React, { FC, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { deepOrange } from "@mui/material/colors";
declare module "@mui/material/styles" {
  interface Palette {
    white: Palette["primary"];
  }
  interface PaletteOptions {
    white?: PaletteOptions["primary"];
  }
}
const MuiTheme: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { i18n } = useTranslation();
  const theme = createTheme({
    direction: i18n.language === "ar" ? "rtl" : "ltr",
    palette: {
      primary: {
        main: "#1F2937",
        contrastText: "#fff",
      },
      secondary: {
        light: "#f8c062",
        main: "#f7b13b",
        dark: "#F59E0B",
      },
      white: {
        main: "#fff",
      },
    },
    components: {
      MuiMenu: {
        defaultProps: {
          disableScrollLock: true,
        },
      },

      MuiDialog: {
        defaultProps: {
          disableScrollLock: true,
        },
      },
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiTheme;
