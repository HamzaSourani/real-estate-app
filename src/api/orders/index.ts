import API_ROUTE from "@/constants/apiRoute";
import protectedAxiosInstance from "../protectedAxiosInstance";
import {
  GetOrdersParams,
  OrderResponse,
  OrderSpecialPropertyParams,
} from "./type";
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
const orderSpecialProperty = async (params: OrderSpecialPropertyParams) => {
  const { data } = await protectedAxiosInstance.post(
    API_ROUTE.ORDERS.ORDER_SPECIAL_OFFER(params.id)
  );
  return data;
};
export { getAllOrders, orderSpecialProperty };
