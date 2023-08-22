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
export interface AddPropertyBody {
  name: string;
  contract_type: number;
  detail: string;
  city_id: string;
  feature_ids: string[];
  water_front: boolean;
  images: string[];
  bed_rooms: number;
  bath_rooms: number;
  kitchens: number;
  floors: number;
  floor_level: number;
  sqft_living: number;
  sqft_living_15: number;
  sqft_lot: number;
  sqft_lot_15: number;
  sqft_above: number;
  sqft_basement: number;
  view: number;
  condition: number;
  grade: number;
  yr_built: string;
  yr_renovated: string;
  zip_code: string;
  lat: string;
  long: string;
  north: boolean;
  south: boolean;
  east: boolean;
  west: boolean;
  price: number;
  address: string;
  type_id: string;
  region_id: string;
  furnish_id: string;
  cladding_id: string;
}
