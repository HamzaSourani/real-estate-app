import { AutocompleteObject } from "@/type";
import { GenericResponse } from "../type";
import { Sort } from "@/pages/properties/type";

export type PropertiesResponse = GenericResponse<{
  properties: Property[];
  total: number;
}>;
export type RegionsResponse = GenericResponse<{
  regions: AutocompleteObject[];
}>;
export type PropertyTypesResponse = GenericResponse<{
  types: AutocompleteObject[];
}>;
export type FurnishesResponse = GenericResponse<{
  furnishes: AutocompleteObject[];
}>;
export type CladdingsResponse = GenericResponse<{
  claddings: AutocompleteObject[];
}>;
export type FeaturesResponse = GenericResponse<{
  features: AutocompleteObject[];
}>;
export interface DeletePropertyParams {
  propertyId: string;
}
export interface Property {
  id: string;
  name: string;
  date_of_publish: string;
  contract_type: number;
  bed_rooms: number;
  sqft_living: number;
  price: number;
  is_favorite: boolean;
  favorite_count: number;
  views_count: number;
  city: AutocompleteObject;
  image: Image;
}
export interface AddFeatureBody {
  name: string;
}
export type AddFeatureResponse = GenericResponse<{
  feature: AutocompleteObject;
}>;
export type PriceRangResponse = GenericResponse<{
  max_price: number;
  min_price: number;
}>;
export type AreaRangResponse = GenericResponse<{
  max_area: number;
  min_area: number;
}>;
export interface Image {
  media_url: string;
  hash: string;
}
export type PropertyFilters = Partial<{
  page: number;
  perPage: number;
  name: string;
  address: string;
  bedrooms: number | null;
  bathrooms: number | null;
  kitchens: number | null;
  floors: number | null;
  floorsLevel: number | null;
  north: boolean | null;
  south: boolean | null;
  east: boolean | null;
  west: boolean | null;
  city: AutocompleteObject | null;
  region: AutocompleteObject | null;
  priceMin: number | null;
  priceMax: number | null;
  sqftLivingMin: number | null;
  sqftLivingMax: number | null;
  typeId: number | null;
  sort: Sort;
}>;
export type GetPropertyParamsKeys = keyof GetPropertyParams;

export type GetPropertyParams = Partial<{
  page: number;
  perPage: number;
  name: string;
  address: string;
  bed_rooms: number | null;
  bath_rooms: number | null;
  kitchens: number | null;
  floors: number | null;
  floorsLevel: number | null;
  north: boolean | null;
  south: boolean | null;
  east: boolean | null;
  west: boolean | null;
  city_id: string | null;
  region_id: string | null;
  type_id: number | null;
  price_min: number | null;
  price_max: number | null;
  sqft_living_min: number | null;
  sqft_living_max: number | null;
  sort: string;
}>;
export interface AddPropertyBody {
  name: string;
  address: string;
  type_id: string;
  region_id: string;
  furnish_id: string;
  cladding_id: string;
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
}
export interface PredictPriceOfPropertyBody {
  bedrooms: number;
  bathrooms: number;
  sqft_living: number;
  sqft_lot: number;
  floors: number;
  waterfront: number;
  view: number;
  condtion: number;
  grade: number;
  sqft_above: number;
  sqft_basement: number;
  yr_built: string;
  yr_renovated: string;
  zipcode: string;
  lat: string;
  sqft_living15: number;
  sqft_lot15: number;
}
export interface PredictPriceOfPropertyResponse {
  prediction: string;
}
