import { ContractType, PropertyType, SelectObject } from "@/type";
import { GenericResponse } from "../type";

export type PropertiesResponse = GenericResponse<{
  properties: Property[];
}>;

export interface Property {
  id: number;
  name: string;
  date_of_publish: string;
  contract_type: number;
  bed_rooms: number;
  sqft_living: number;
  price: number;
  is_favorite: boolean;
  favorite_count: number;
  views_count: number;
  city: SelectObject;
  image: Image;
}

export interface Image {
  media_url: string;
  hash: string;
}

export type GetPropertyParamsKeys = keyof GetPropertyParams;
export type GetPropertyParams = Partial<{
  page: number;
  perPage: number;
  name: string;
  address: string;
  bed_rooms: number;
  bath_rooms: number;
  kitchens: number;
  floors: number;
  floorsLevel: number;
  north: boolean;
  south: boolean;
  east: boolean;
  west: boolean;
  city_id: string;
  region_id: string;
  type_id: PropertyType;
  contact_type: ContractType;
  price_min: number;
  price_max: number;
  sqft_living_min: number;
  sqft_living_max: number;
  sort: string;
}>;
