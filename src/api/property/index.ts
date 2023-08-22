import API_ROUTE from "@/constants/apiRoute";
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
} from "./type";

const getSpecialProperties = async () => {
  const { data } = await publicAxiosInstance.get<PropertiesResponse>(
    API_ROUTE.PROPERTY.GET_SPECIAL
  );
  return data;
};
const getProperties = async (params: GetPropertyParams) => {
  const filterParams = Object.keys(params).reduce((acc: any, key: string) => {
    const transformedKey = `filter[${key}]`;
    acc[transformedKey] = params[key as GetPropertyParamsKeys];
    return acc;
  }, {});
  const { data } = await publicAxiosInstance.get<PropertiesResponse>(
    API_ROUTE.PROPERTY.GET_PROPERTIES,
    {
      params: filterParams,
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
export {
  getSpecialProperties,
  getProperties,
  getRegions,
  getPropertyTypes,
  getFurnishes,
  getCladdings,
  getFeatures,
  addFeature,
};
