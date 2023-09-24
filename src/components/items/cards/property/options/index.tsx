import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import StarsIcon from "@mui/icons-material/Stars";
import DeletePropertyDialog from "@/components/pages/profile/dialog/deletePorperty";
import useAnchorEle from "@/hooks/useAnchorEle";
import useToggleEle from "@/hooks/useToggleEle";
import { Props } from "./type";
import NAVIGATION from "@/constants/navigation";
import OrderSpecialPropertyDialog from "@/components/pages/profile/dialog/orderSpecialProperty";
const PropertyOptions = ({
  id,
  name,
  hasSpecialOrder,
  hasUpdateOrder,
}: Props) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [open, anchorEle, handleClick, handleClose] = useAnchorEle();
  const [
    openDeletePropertyDialog,
    handleOpenDeletePropertyDialog,
    handleCloseDeletePropertyDialog,
  ] = useToggleEle(false);
  const [
    openOrderSpecialPropertyDialog,
    handleOpenOrderSpecialPropertyDialog,
    handleCloseOrderSpecialPropertyDialog,
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
            !hasUpdateOrder &&
              navigate(`/${NAVIGATION.MAIN_PAGES.UPDATE_PROPERTY(id)}`);
          }}
        >
          <ListItemIcon>
            <EditIcon color={hasUpdateOrder ? "disabled" : "primary"} />
          </ListItemIcon>
          <ListItemText>
            <Typography color={hasUpdateOrder ? "GrayText" : "primary"}>
              {t("components.property-card.edit-property")}
            </Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => {
            !hasSpecialOrder && handleOpenOrderSpecialPropertyDialog();
          }}
        >
          <ListItemIcon>
            <StarsIcon color={hasSpecialOrder ? "disabled" : "primary"} />
          </ListItemIcon>
          <ListItemText>
            <Typography color={hasSpecialOrder ? "GrayText" : "primary"}>
              {t("components.property-card.add-to-special-property")}
            </Typography>
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
        property={{ name, id }}
      />
      <OrderSpecialPropertyDialog
        open={openOrderSpecialPropertyDialog}
        handleClose={handleCloseOrderSpecialPropertyDialog}
        property={{ name, id }}
      />
    </>
  );
};

export default PropertyOptions;
