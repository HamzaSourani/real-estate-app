import axios from "axios";
import API_ROUTE from "@/constants/apiRoute";
import { PREDICT_URL } from "@/constants/domines";
import publicAxiosInstance from "../publicAxiosInstance";
import {
  PropertyResponse,
  AddFeatureBody,
  AddFeatureResponse,
  CladdingsResponse,
  FeaturesResponse,
  FurnishesResponse,
  GetPropertiesParams,
  GetPropertiesParamsKeys,
  PropertiesResponse,
  PropertyTypesResponse,
  RegionsResponse,
  PredictPriceOfPropertyBody,
  PredictPriceOfPropertyResponse,
  AddPropertyBody,
  PropertyFilters,
  DeletePropertyParams,
  PriceRangResponse,
  AreaRangResponse,
} from "./type";
import protectedAxiosInstance from "../protectedAxiosInstance";
import { Params } from "@/type";

const getSpecialProperties = async () => {
  const { data } = await publicAxiosInstance.get<PropertiesResponse>(
    API_ROUTE.PROPERTY.GET_SPECIAL
  );
  return data;
};
const getProperties = async (params: PropertyFilters) => {
  const {
    page,
    perPage,
    name,
    address,
    bedrooms,
    bathrooms,
    kitchens,
    floors,
    floorsLevel,
    north,
    south,
    east,
    west,
    city,
    region,
    typeId,
    priceMin,
    priceMax,
    sqftLivingMin,
    sqftLivingMax,
    sort,
  } = params;
  const getPropertiesParams: GetPropertiesParams = {
    name,
    address,
    bed_rooms: bedrooms,
    bath_rooms: bathrooms,
    kitchens,
    floors,
    floorsLevel,
    north,
    south,
    east,
    west,
    city_id: city?.id,
    region_id: region?.id,
    type_id: typeId,
    price_min: priceMin,
    price_max: priceMax,
    sqft_living_min: sqftLivingMin,
    sqft_living_max: sqftLivingMax,
  };
  const filterParams = Object.keys(getPropertiesParams).reduce(
    (acc: any, key: string) => {
      const transformedKey = `filter[${key}]`;
      acc[transformedKey] = getPropertiesParams[key as GetPropertiesParamsKeys];
      return acc;
    },
    {}
  );
  const { data } = await publicAxiosInstance.get<PropertiesResponse>(
    API_ROUTE.PROPERTY.GET_PROPERTIES,
    {
      params: { ...filterParams, sort, page, perPage },
    }
  );
  return data;
};
const getProperty = async ({ propertyId }: Params) => {
  console.log("enter api area");
  const { data } = await publicAxiosInstance.get<PropertyResponse>(
    API_ROUTE.PROPERTY.GET_PROPERTY(propertyId)
  );
  return data;
};
const getRegions = async () => {
  const { data } = await publicAxiosInstance.get<RegionsResponse>(
    API_ROUTE.PROPERTY.GET_REGIONS
  );
  return data;
};
const getPropertyTypes = async () => {
  const { data } = await publicAxiosInstance.get<PropertyTypesResponse>(
    API_ROUTE.PROPERTY.GET_PROPERTY_TYPES
  );
  return data;
};
const getFurnishes = async () => {
  const { data } = await publicAxiosInstance.get<FurnishesResponse>(
    API_ROUTE.PROPERTY.GET_FURNISHES
  );
  return data;
};
const getCladdings = async () => {
  const { data } = await publicAxiosInstance.get<CladdingsResponse>(
    API_ROUTE.PROPERTY.GET_CLADDINGS
  );
  return data;
};
const getFeatures = async () => {
  const { data } = await publicAxiosInstance.get<FeaturesResponse>(
    API_ROUTE.PROPERTY.GET_FEATURES
  );
  return data;
};
const addFeature = async (body: AddFeatureBody) => {
  const { data } = await publicAxiosInstance.post<AddFeatureResponse>(
    API_ROUTE.PROPERTY.ADD_FEATURE,
    body
  );
  return data;
};
const predictPriceOfProperty = async (body: PredictPriceOfPropertyBody) => {
  const token = localStorage.getItem("token");

  const { data } = await axios.post<PredictPriceOfPropertyResponse>(
    `${PREDICT_URL}${API_ROUTE.PROPERTY.PREDICT}`,
    body,
    {
      headers: {
        Authorization: `Bearer ${JSON.parse(token ?? "")}`,
        Accept: "application/json",
      },
    }
  );
  return data;
};
const getPriceRange = async () => {
  const { data } = await publicAxiosInstance.get<PriceRangResponse>(
    API_ROUTE.PROPERTY.GET_PRICE_RANGE
  );
  return data;
};
const getAreaRange = async () => {
  const { data } = await publicAxiosInstance.get<AreaRangResponse>(
    API_ROUTE.PROPERTY.GET_AREA_RANGE
  );
  return data;
};
const addProperty = async (body: AddPropertyBody) => {
  const { data } = await protectedAxiosInstance.post(
    API_ROUTE.PROPERTY.ADD,
    body
  );
  return data;
};
const deleteProperty = async ({ propertyId }: DeletePropertyParams) => {
  const { data } = await protectedAxiosInstance.delete(
    API_ROUTE.PROPERTY.DELETE(propertyId)
  );
  return data;
};
export {
  getSpecialProperties,
  getProperties,
  getProperty,
  getRegions,
  getPropertyTypes,
  getFurnishes,
  getCladdings,
  getFeatures,
  addFeature,
  predictPriceOfProperty,
  addProperty,
  getPriceRange,
  getAreaRange,
  deleteProperty,
};
