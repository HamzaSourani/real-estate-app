import API_ROUTE from "@/constants/apiRoute";
import publicAxiosInstance from "../publicAxiosInstance";
import { PropertiesResponse } from "./type";

const getSpecialProperties = async () => {
  const { data } = await publicAxiosInstance.get<PropertiesResponse>(
    API_ROUTE.PROPERTY.GET_SPECIAL
  );
  return data;
};
export { getSpecialProperties };
