import { useTranslation } from "react-i18next";
import { Dialog, DialogActions, Button, DialogTitle } from "@mui/material";
import Transition from "../../../../items/dialog/transition";
import { Props } from "./type";
import { useDeletePropertyMutation } from "@/api/property/queries";
import { showError, showSuccess } from "@/libs/reactToastify";

const DeletePropertyDialog = ({
  open,
  property: { id, name },
  handleClose,
}: Props) => {
  const { t } = useTranslation();
  const { mutate: deleteProperty } = useDeletePropertyMutation();
  const handleDeleteProperty = () => {
    deleteProperty(
      { propertyId: id },
      {
        onSuccess(data, variables, context) {
          showSuccess(
            t("components.delete-property-dialog.success", {
              propertyName: name,
            })
          );
          handleClose();
        },
        onError(error, variables, context) {
          showError(
            t("components.delete-property-dialog.failed", {
              propertyName: name,
            })
          );
          handleClose();
        },
      }
    );
  };
  return (
    <Dialog open={open} onClose={handleClose} TransitionComponent={Transition}>
      <DialogTitle>
        {t("components.delete-property-dialog.title", {
          propertyName: name,
        })}
      </DialogTitle>
      <DialogActions>
        <Button
          variant="contained"
          size="small"
          color="error"
          onClick={handleDeleteProperty}
        >
          {t("components.delete-property-dialog.delete")}
        </Button>
        <Button
          variant="contained"
          size="small"
          color="secondary"
          onClick={handleClose}
        >
          {t("common.cancel")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeletePropertyDialog;
