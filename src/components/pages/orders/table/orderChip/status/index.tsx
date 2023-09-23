import { useTranslation } from "react-i18next";
import Chip from "@mui/material/Chip";
import { ORDER_STATUS } from "@/type";

type TProps = {
  status: ORDER_STATUS;
};
const OrderStatusChip = ({ status }: TProps) => {
  const { t } = useTranslation();
  switch (status) {
    case ORDER_STATUS.REQUESTED:
      return (
        <Chip
          label={t("pages.orders.status.requested")}
          color="info"
          size="small"
          sx={{ minWidth: 75 }}
        />
      );
    default:
      return (
        <Chip
          label={t("pages.orders.status.rejected")}
          color="error"
          size="small"
          sx={{ minWidth: 75 }}
        />
      );
  }
};

export default OrderStatusChip;
