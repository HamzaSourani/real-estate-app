import { IconButton, Menu, MenuItem } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import useAnchorEle from "@/hooks/useAnchorEle";
import { useTranslation } from "react-i18next";
import i18n from "@/localization/I18next";
import { TProps } from "./type";
const LanguageMenu = ({ iconColor = "common.white" }: TProps) => {
  const { t } = useTranslation();
  const [open, anchorEl, handleClick, handleClose] = useAnchorEle();
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
  return (
    <>
      <IconButton
        id="language-menu-button"
        aria-controls={open ? "language-menu" : undefined}
        aria-haspopup={"true"}
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <TranslateIcon sx={{ color: iconColor }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "language-menu-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleChangeLanguage("en");
          }}
        >
          {t("languages.en")}
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleChangeLanguage("ar");
          }}
        >
          {t("languages.ar")}
        </MenuItem>
      </Menu>
    </>
  );
};

export default LanguageMenu;
