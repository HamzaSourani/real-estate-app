import { ORDER_STATUS, ORDER_TYPE } from "@/type";
import { GenericResponse } from "../type";

export interface GetOrdersParams {
  status: ORDER_STATUS | null;
  type: ORDER_TYPE | null;
}
export interface Order {
  id: string;
  name: string;
  type: ORDER_TYPE;
  status: ORDER_STATUS;
  message_of_reject: String | null;
}
export interface OrderSpecialPropertyParams {
  id: string;
}
export type OrderResponse = GenericResponse<Order[][]>;
