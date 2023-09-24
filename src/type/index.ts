import { PROPERTY_TYPE } from "@/constants/property";

export interface AutocompleteObject {
  id: string;
  label: string;
}
export interface SelectObject {
  value: number;
  label: string;
}
export type Params = {
  propertyId: string | undefined;
};
export enum CONTRACT_TYPE {
  SELL = 1,
  RENT = 2,
}
export enum ORDER_STATUS {
  REQUESTED = 1,
  REJECTED,
  ALL,
}
export enum ORDER_TYPE {
  UPLOAD = 1,
  UPDATE,
  SPECIAL_OFFER,
  ALL,
}
export type PropertyTypeKeys = keyof typeof PROPERTY_TYPE;
