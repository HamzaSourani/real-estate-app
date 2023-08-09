import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import NAVIGATION from "@/constants/navigation";

interface LinkTabProps {
  label: string;
  href: string;
}

function LinkTab(props: LinkTabProps) {
  const navigate = useNavigate();
  return (
    <Tab
      component="a"
      sx={{
        display: { xs: "none", sm: "inherit" },
        "&.Mui-selected": {
          color: "white !important",
        },
        color: "white !important",
      }}
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        navigate(props.href);
      }}
      {...props}
    />
  );
}
const TABS = [
  { label: "common.home", href: NAVIGATION.MAIN_PAGES.HOME },
  { label: "common.villas", href: NAVIGATION.MAIN_PAGES.VILLAS },
  { label: "common.chalets", href: NAVIGATION.MAIN_PAGES.CHALETS },
  { label: "common.houses", href: NAVIGATION.MAIN_PAGES.HOUSES },
];
export default function NavTabs() {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <Box>
      <Tabs
        value={TABS.findIndex((tab) => tab.label.endsWith(pathname.slice(1)))}
        sx={{
          "&.Mui-selected": {
            color: "white",
          },
        }}
        indicatorColor="secondary"
        aria-label="nav tabs "
      >
        {TABS.map((tab) => (
          <LinkTab key={tab.label} label={t(tab.label)} href={`/${tab.href}`} />
        ))}
      </Tabs>
    </Box>
  );
}
