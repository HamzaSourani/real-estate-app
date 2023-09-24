import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  AppBar,
  IconButton,
  Link as MuiLink,
  Stack,
  Toolbar,
  Tooltip,
} from "@mui/material";
import useAuthorization from "@/hooks/useAuthorization";
import LogoIcon from "@/components/items/svg/logo";
import SignInIcon from "@mui/icons-material/Login";
import NAVIGATION from "@/constants/navigation";
import MenuProfile from "./menuProfile";
import NavTabs from "./tabs";

const Navbar = () => {
  const { t } = useTranslation();
  const isAuthorized = useAuthorization();
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to={NAVIGATION.MAIN_PAGES.HOME}>
          <LogoIcon sx={{ width: 60, height: 60 }} />
        </Link>
        <Stack direction={"row"} justifyContent={"end"} sx={{ flexGrow: 1 }}>
          <NavTabs />
          {isAuthorized ? (
            <MenuProfile />
          ) : (
            <MuiLink
              component={Link}
              to={`/${NAVIGATION.AUTH.INDEX}/${NAVIGATION.AUTH.SIGN_IN}`}
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              <Tooltip title={t("pages.auth.sign-in.title")}>
                <IconButton sx={{ color: "common.white" }}>
                  <SignInIcon />
                </IconButton>
              </Tooltip>
            </MuiLink>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
