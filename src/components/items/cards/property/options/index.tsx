import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import DeletePropertyDialog from "@/components/items/dialog/deletePorperty";
import useAnchorEle from "@/hooks/useAnchorEle";
import useToggleEle from "@/hooks/useToggleEle";
import { Props } from "./type";
import NAVIGATION from "@/constants/navigation";
const PropertyOptions = (props: Props) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [open, anchorEle, handleClick, handleClose] = useAnchorEle();
  const [
    openDeletePropertyDialog,
    handleOpenDeletePropertyDialog,
    handleCloseDeletePropertyDialog,
  ] = useToggleEle(false);
  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        open={open}
        anchorEl={anchorEle}
        onClick={handleClose}
        onClose={handleClose}
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
            navigate(`/${NAVIGATION.MAIN_PAGES.UPDATE_PROPERTY(props.id)}`);
          }}
        >
          <ListItemIcon>
            <EditIcon color="primary" />
          </ListItemIcon>
          <ListItemText>
            {t("components.property-card.edit-property")}
          </ListItemText>
        </MenuItem>
        <MenuItem onClick={handleOpenDeletePropertyDialog}>
          <ListItemIcon>
            <DeleteForeverIcon color="error" />
          </ListItemIcon>
          <ListItemText>
            {t("components.property-card.delete-property")}
          </ListItemText>
        </MenuItem>
      </Menu>
      <DeletePropertyDialog
        open={openDeletePropertyDialog}
        handleClose={handleCloseDeletePropertyDialog}
        property={{ ...props }}
      />
    </>
  );
};

export default PropertyOptions;
