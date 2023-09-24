import { useMutation, useQuery } from "@tanstack/react-query";
import { GetOrdersParams, OrderSpecialPropertyParams } from "./type";
import { getAllOrders, orderSpecialProperty } from ".";

const useGetAllOrdersQuery = (params: GetOrdersParams) =>
  useQuery({
    queryKey: ["get-all-orders", params],
    queryFn: () => getAllOrders(params),
  });
const useOrderSpecialPropertyMutation = () =>
  useMutation({
    mutationKey: ["order-special-property"],
    mutationFn: (params: OrderSpecialPropertyParams) =>
      orderSpecialProperty(params),
  });
export { useGetAllOrdersQuery, useOrderSpecialPropertyMutation };
