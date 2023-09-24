import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  alpha,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import { ORDER_STATUS, ORDER_TYPE } from "@/type";
import { useGetAllOrdersQuery } from "@/api/orders/queries";
import SelectFiled from "@/components/items/inputs/selectField";
import LoadingTable from "@/components/pages/orders/table/fullback/loading";
import {
  StyledHeadCell,
  StyledTableRow,
} from "@/components/pages/orders/table/style";
import OrderStatusChip from "@/components/pages/orders/table/orderChip/status";
import OrderTypeChip from "@/components/pages/orders/table/orderChip/type";
import EmptyOrders from "@/components/pages/orders/table/fullback/empty";
import ErrorOrders from "@/components/pages/orders/table/fullback/error";

const Orders = () => {
  const [status, setStatus] = useState<ORDER_STATUS>(ORDER_STATUS.ALL);
  const [type, setType] = useState<ORDER_TYPE>(ORDER_TYPE.ALL);
  const { t } = useTranslation();
  const {
    data: orders,
    isLoading,
    isError,
  } = useGetAllOrdersQuery({ status, type });
  const ORDER_STATUS_OPTIONS = [
    { value: ORDER_STATUS.ALL, label: "pages.orders.status.all" },
    { value: ORDER_STATUS.REQUESTED, label: "pages.orders.status.requested" },
    { value: ORDER_STATUS.REJECTED, label: "pages.orders.status.rejected" },
  ];
  const ORDER_TYPE_OPTIONS = [
    { value: ORDER_TYPE.ALL, label: "pages.orders.type.all" },
    { value: ORDER_TYPE.UPLOAD, label: "pages.orders.type.upload" },
    { value: ORDER_TYPE.UPDATE, label: "pages.orders.type.update" },
    {
      value: ORDER_TYPE.SPECIAL_OFFER,
      label: "pages.orders.type.special-offer",
    },
  ];
  return (
    <Box my={5}>
      <Grid container spacing={4}>
        <Grid item container justifyContent={"center"} xs={12} spacing={2}>
          <Grid item xs={5} md={4} lg={3}>
            <SelectFiled
              label="pages.orders.status.title"
              value={status}
              options={ORDER_STATUS_OPTIONS}
              setValue={setStatus}
            />
          </Grid>
          <Grid item xs={5} md={4} lg={3}>
            <SelectFiled
              label="pages.orders.type.title"
              value={type}
              options={ORDER_TYPE_OPTIONS}
              setValue={setType}
            />
          </Grid>
        </Grid>
        <Grid item container justifyContent={"center"} xs={12}>
          <Grid item xs={11} md={10} lg={9}>
            <Paper sx={{ width: "100%" }}>
              <TableContainer sx={{ height: 318, overflowY: "auto" }}>
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      <StyledHeadCell>{t("pages.orders.name")}</StyledHeadCell>
                      <StyledHeadCell>
                        {t("pages.orders.status.title")}
                      </StyledHeadCell>
                      <StyledHeadCell>
                        {t("pages.orders.type.title")}
                      </StyledHeadCell>
                      {status === ORDER_STATUS.REJECTED && (
                        <StyledHeadCell>
                          {t("pages.orders.message-of-reject")}
                        </StyledHeadCell>
                      )}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {isLoading ? (
                      <LoadingTable
                        cellCount={status === ORDER_STATUS.REJECTED ? 4 : 3}
                      />
                    ) : isError ? (
                      <ErrorOrders status={status} />
                    ) : !!!orders.data[0].length ? (
                      <EmptyOrders status={status} />
                    ) : (
                      orders.data[0].map((order) => (
                        <StyledTableRow key={order.id}>
                          <TableCell>{order.name}</TableCell>
                          <TableCell>
                            <OrderStatusChip status={order.status} />
                          </TableCell>
                          <TableCell>
                            <OrderTypeChip type={order.type} />
                          </TableCell>
                          {status === ORDER_STATUS.REJECTED && (
                            <TableCell>{order.message_of_reject}</TableCell>
                          )}
                        </StyledTableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Orders;
