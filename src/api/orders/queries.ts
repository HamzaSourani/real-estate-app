import { useQuery } from "@tanstack/react-query";
import { GetOrdersParams } from "./type";
import { getAllOrders } from ".";

const useGetAllOrdersQuery = (params: GetOrdersParams) =>
  useQuery({
    queryKey: ["get-all-orders", params],
    queryFn: () => getAllOrders(params),
  });
export { useGetAllOrdersQuery };
