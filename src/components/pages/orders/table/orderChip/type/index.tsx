import { useTranslation } from "react-i18next";
import Chip from "@mui/material/Chip";
import { ORDER_TYPE } from "@/type";
type TProps = {
  type: ORDER_TYPE;
};
const OrderTypeChip = ({ type }: TProps) => {
  const { t } = useTranslation();
  switch (type) {
    case ORDER_TYPE.UPLOAD:
      return (
        <Chip
          label={t("pages.orders.type.upload")}
          color="secondary"
          size="small"
          sx={{ minWidth: 75 }}
        />
      );
    case ORDER_TYPE.UPDATE:
      return (
        <Chip
          label={t("pages.orders.type.update")}
          color="primary"
          size="small"
          sx={{ minWidth: 75 }}
        />
      );
    case ORDER_TYPE.SPECIAL_OFFER:
      return (
        <Chip
          label={t("pages.orders.type.special-offer")}
          color="info"
          size="small"
          sx={{ minWidth: 75 }}
        />
      );
  }
};

export default OrderTypeChip;
