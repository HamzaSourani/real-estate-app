import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";
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
import TranslateIcon from "@mui/icons-material/Translate";
import AddPropertyIcon from "@mui/icons-material/AddHome";
import PasswordIcon from "@mui/icons-material/Password";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import useAnchorEle from "@/hooks/useAnchorEle";
import { useNavigate } from "react-router-dom";
import NAVIGATION from "@/constants/navigation";
import useToggleEle from "@/hooks/useToggleEle";
import ChangePassword from "@/components/items/dialog/changePassword";
import { UserProfileResponse } from "@/api/user/type";

const MenuProfile = () => {
  const [open, anchorEl, handleClick, handleClose] = useAnchorEle();
  const [
    openChangePasswordDialog,
    handleOpenChangePasswordDialog,
    handleCloseChangePasswordDialog,
  ] = useToggleEle(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const queryClient = useQueryClient();
  const userProfileData: UserProfileResponse | undefined =
    queryClient.getQueryData(["get-user-profile"]);
  const handleNavigate = (href: string) => {
    handleClose();
    navigate(href);
  };
  const handleChangeLanguage = (lang: "en" | "ar") => {
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
    switch (lang) {
      case "ar":
        document.dir = "rtl";
        break;
      default:
        document.dir = "ltr";
    }
  };
  const handleSignOut = () => {
    localStorage.removeItem("token");
    window.location.replace(
      `/${NAVIGATION.AUTH.INDEX}/${NAVIGATION.AUTH.SIGN_IN}`
    );
    handleClose();
  };
  const MENU_PROFILE_ITEM = [
    {
      label: "pages.profile.title",
      icon: <UserProfileIcon />,

      handleNavigate,
    },
    {
      label: "pages.addProperty",
      icon: <UserProfileIcon />,
      handleNavigate,
    },
    {
      label: "pages.auth.sign-out.title",
      icon: <SignOutIcon />,
      handleNavigate,
    },
  ];
  return (
    <Tooltip title={t("pages.profile.title")}>
      <>
        <IconButton onClick={handleClick}>
          <Avatar src={userProfileData?.data.user.image.media_url} />
        </IconButton>
        {open && (
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
            <MenuItem
              onClick={() => {
                handleClose();
                handleNavigate(`/${NAVIGATION.MAIN_PAGES.PROFILE}`);
              }}
            >
              <ListItemIcon>
                <UserProfileIcon />
              </ListItemIcon>
              <Typography>{t("pages.profile.title")}</Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                handleNavigate(`/${NAVIGATION.MAIN_PAGES.ADD_PROPERTY}`);
              }}
            >
              <ListItemIcon>
                <AddPropertyIcon />
              </ListItemIcon>
              <Typography>{t("pages.profile.add-property")}</Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                handleNavigate(`/${NAVIGATION.MAIN_PAGES.ORDERS}`);
              }}
            >
              <ListItemIcon>
                <MailOutlineIcon />
              </ListItemIcon>
              <Typography>{t("pages.profile.orders")}</Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                handleChangeLanguage(i18n.language === "ar" ? "en" : "ar");
              }}
            >
              <ListItemIcon>
                <TranslateIcon />
              </ListItemIcon>
              <Typography>
                {t(`languages.${i18n.language === "ar" ? "en" : "ar"}`)}
              </Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                handleOpenChangePasswordDialog();
              }}
            >
              <ListItemIcon>
                <PasswordIcon />
              </ListItemIcon>
              <Typography>
                {t("components.change-password-dialog.title")}
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleSignOut}>
              <ListItemIcon>
                <SignOutIcon />
              </ListItemIcon>
              <Typography>{t("pages.auth.sign-out.title")}</Typography>
            </MenuItem>
          </Menu>
        )}
        <ChangePassword
          open={openChangePasswordDialog}
          handleClose={handleCloseChangePasswordDialog}
        />
      </>
    </Tooltip>
  );
};

export default MenuProfile;
