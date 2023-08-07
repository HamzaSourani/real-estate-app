import { useTranslation } from "react-i18next";
import {
  IconButton,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import SignOutIcon from "@mui/icons-material/Logout";
import UserProfileIcon from "@mui/icons-material/AccountCircle";

import useAnchorEle from "@/hooks/useAnchorEle";
const MenuProfile = () => {
  const [open, anchorEl, handleClick, handleClose] = useAnchorEle();
  const { t } = useTranslation();
  return (
    <Tooltip title={t("pages.profile.title")}>
      <>
        <IconButton onClick={handleClick}>
          <Avatar src="" />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <UserProfileIcon />
            </ListItemIcon>
            <Typography>{t("pages.profile.title")}</Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SignOutIcon />
            </ListItemIcon>
            <Typography>{t("pages.auth.sign-out.title")}</Typography>
          </MenuItem>
        </Menu>
      </>
    </Tooltip>
  );
};

export default MenuProfile;
