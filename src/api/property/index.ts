import API_ROUTE from "@/constants/apiRoute";
import publicAxiosInstance from "../publicAxiosInstance";
import {
  GetPropertyParams,
  GetPropertyParamsKeys,
  PropertiesResponse,
} from "./type";

const getSpecialProperties = async () => {
  const { data } = await publicAxiosInstance.get<PropertiesResponse>(
    API_ROUTE.PROPERTY.GET_SPECIAL
  );
  return data;
};
const getAllProperties = async (params: GetPropertyParams) => {
  const filterParams = Object.keys(params).reduce((acc: any, key: string) => {
    const transformedKey = `filter[${key}]`;
    acc[transformedKey] = params[key as GetPropertyParamsKeys];
    return acc;
  }, {});
  const { data } = await publicAxiosInstance.get<PropertiesResponse>(
    API_ROUTE.PROPERTY.GET_ALL,
    {
      params: filterParams,
    }
  );
  return data;
};
export { getSpecialProperties, getAllProperties };
