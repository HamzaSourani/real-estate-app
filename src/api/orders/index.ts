import API_ROUTE from "@/constants/apiRoute";
import protectedAxiosInstance from "../protectedAxiosInstance";
import { GetOrdersParams, OrderResponse } from "./type";
import { filterParams } from "@/utils/filterParams";

const getAllOrders = async (params: GetOrdersParams) => {
  const { data } = await protectedAxiosInstance.get<OrderResponse>(
    API_ROUTE.ORDERS.GET_ALL,
    {
      params: filterParams<GetOrdersParams>(params),
    }
  );
  return data;
};
export { getAllOrders };
