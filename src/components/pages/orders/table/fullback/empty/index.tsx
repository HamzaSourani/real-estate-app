import { ORDER_STATUS } from "@/type";
import { Box, TableCell, TableRow, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
export interface Props {
  status: ORDER_STATUS | null;
}
const EmptyOrders = ({ status }: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <TableRow>
        <TableCell colSpan={4} rowSpan={5}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={256}
          >
            <Typography textAlign={"center"}>
              {t("pages.orders.empty", {
                status:
                  status === ORDER_STATUS.REJECTED
                    ? t("pages.orders.status.rejected")
                    : status === ORDER_STATUS.REQUESTED
                    ? t("pages.orders.status.requested")
                    : "",
              })}
            </Typography>
          </Box>
        </TableCell>
      </TableRow>
    </>
  );
};

export default EmptyOrders;
