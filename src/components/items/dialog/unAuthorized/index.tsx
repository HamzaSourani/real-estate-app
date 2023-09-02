import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogActions,
  Button,
  DialogTitle,
  DialogContent,
  Stack,
} from "@mui/material";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";
import NAVIGATION from "@/constants/navigation";
import { Props } from "./type";

const UnAuthorizedDialog = ({ open, handleClose }: Props) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{t("components.un-auth-dialog.content")}</DialogTitle>
      <DialogContent>
        <Stack justifyContent={"center"} alignItems={"center"}>
          <NoAccountsIcon color="error" sx={{ fontSize: "5rem" }} />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          onClick={() => {
            navigate(NAVIGATION.AUTH.SIGN_IN);
          }}
        >
          {t("pages.auth.sign-in.title")}
        </Button>
        <Button variant="contained" color="secondary" onClick={handleClose}>
          {t("components.un-auth-dialog.cancel")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UnAuthorizedDialog;
