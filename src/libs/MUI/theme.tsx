import React, { FC, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const MuiTheme: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { i18n } = useTranslation();
  const theme = createTheme({
    direction: i18n.language === "ar" ? "rtl" : "ltr",
    palette: {
      primary: { main: "#3a3657" },
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
