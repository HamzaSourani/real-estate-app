import axios from "axios";
import API_ROUTE from "@/constants/apiRoute";
import { PREDICT_URL } from "@/constants/domines";
import publicAxiosInstance from "../publicAxiosInstance";
import {
  AddFeatureBody,
  AddFeatureResponse,
  CladdingsResponse,
  FeaturesResponse,
  FurnishesResponse,
  GetPropertyParams,
  GetPropertyParamsKeys,
  PropertiesResponse,
  PropertyTypesResponse,
  RegionsResponse,
  PredictPriceOfPropertyBody,
  PredictPriceOfPropertyResponse,
  AddPropertyBody,
  PropertyFilters,
} from "./type";
import protectedAxiosInstance from "../protectedAxiosInstance";

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
    cityId,
    regionId,
    typeId,
    priceMin,
    priceMax,
    sqftLivingMin,
    sqftLivingMax,
    sort,
  } = params;
  const getPropertyParams: GetPropertyParams = {
    page,
    perPage,
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
    city_id: cityId,
    region_id: regionId,
    type_id: typeId,
    price_min: priceMin,
    price_max: priceMax,
    sqft_living_min: sqftLivingMin,
    sqft_living_max: sqftLivingMax,
  };
  const filterParams = Object.keys(getPropertyParams).reduce(
    (acc: any, key: string) => {
      const transformedKey = `filter[${key}]`;
      acc[transformedKey] = getPropertyParams[key as GetPropertyParamsKeys];
      return acc;
    },
    {}
  );
  const { data } = await publicAxiosInstance.get<PropertiesResponse>(
    API_ROUTE.PROPERTY.GET_PROPERTIES,
    {
      params: { ...filterParams, sort },
    }
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
const addProperty = async (body: AddPropertyBody) => {
  const { data } = await protectedAxiosInstance.post(
    API_ROUTE.PROPERTY.ADD,
    body
  );
  return data;
};
export {
  getSpecialProperties,
  getProperties,
  getRegions,
  getPropertyTypes,
  getFurnishes,
  getCladdings,
  getFeatures,
  addFeature,
  predictPriceOfProperty,
  addProperty,
};
