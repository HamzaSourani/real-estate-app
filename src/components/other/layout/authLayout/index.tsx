import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Paper, Stack } from "@mui/material";
import { alpha } from "@mui/material/styles";
import AuthParticle from "../../particles";
import LanguageMenu from "../../languageMenu/LanguageMenu";

const AuthLayout = () => {
  return (
    <Box>
      <AuthParticle />
      <Box sx={{ zIndex: 1 }}>
        <Stack direction={"row"} sx={{ mx: 5, my: 2 }}>
          <LanguageMenu />
        </Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - 69px)",
          }}
        >
          <Paper
            sx={{
              minHeight: 20,
              p: 4,
              backdropFilter: "blur(2px)",
              backgroundColor: (theme) =>
                alpha(theme.palette.common.white, 0.3),
            }}
          >
            <Outlet />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default AuthLayout;
