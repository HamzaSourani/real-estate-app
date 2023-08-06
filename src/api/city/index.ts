import API_ROUTE from "@/constants/apiRoute";
import publicAxiosInstance from "../publicAxiosInstance";
import { GetAllCitiesResponse } from "./type";

const getAllCities = async () => {
  const { data } = await publicAxiosInstance.get<GetAllCitiesResponse>(
    API_ROUTE.CITY.GET_ALL
  );
  return data;
};
export { getAllCities };
