import { useTranslation } from "react-i18next";
import { Dialog, DialogActions, Button, DialogTitle } from "@mui/material";
import { showError, showSuccess } from "@/libs/reactToastify";
import { useOrderSpecialPropertyMutation } from "@/api/orders/queries";
import Transition from "@/components/items/dialog/transition";
import { Props } from "./type";

const OrderSpecialPropertyDialog = ({
  open,
  property: { id, name },
  handleClose,
}: Props) => {
  const { t } = useTranslation();
  const { mutate: orderSpecialProperty } = useOrderSpecialPropertyMutation();
  const handleOrderSpecialProperty = () => {
    orderSpecialProperty(
      { id },
      {
        onSuccess(data, variables, context) {
          showSuccess(
            t("pages.profile.order-special-property-dialog.success", {
              propertyName: name,
            })
          );
          handleClose();
        },
        onError(error, variables, context) {
          showError(
            t("pages.profile.order-special-property-dialog.failed", {
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
        {t("pages.profile.order-special-property-dialog.title", {
          propertyName: name,
        })}
      </DialogTitle>
      <DialogActions>
        <Button
          variant="contained"
          size="small"
          color="error"
          onClick={handleOrderSpecialProperty}
        >
          {t("pages.profile.order-special-property-dialog.order")}
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

export default OrderSpecialPropertyDialog;
