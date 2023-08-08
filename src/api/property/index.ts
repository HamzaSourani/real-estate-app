import API_ROUTE from "@/constants/apiRoute";
import publicAxiosInstance from "../publicAxiosInstance";
import { GetPropertyParams, PropertiesResponse } from "./type";

const getSpecialProperties = async () => {
  const { data } = await publicAxiosInstance.get<PropertiesResponse>(
    API_ROUTE.PROPERTY.GET_SPECIAL
  );
  return data;
};
const getAllProperties = async (params: GetPropertyParams) => {
  console.log(Object.keys(params));
  const { data } = await publicAxiosInstance.get<PropertiesResponse>(
    API_ROUTE.PROPERTY.GET_ALL
    // {
    //   params: Object.keys(params).reduce((acc:any, key:string) => {
    //     const transformedKey = `filter[${key}]`;
    //     acc[transformedKey] = params[key] ;
    //     return acc;
    //   }, {}),
    // }
  );
  return data;
};
export { getSpecialProperties, getAllProperties };
