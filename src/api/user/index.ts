import API_ROUTE from "@/constants/apiRoute";
import protectedAxiosInstance from "../protectedAxiosInstance";
import { AddImageBody, UserProfileResponse } from "./type";
import { PropertiesResponse } from "../property/type";

const getUserProfile = async () => {
  const { data } = await protectedAxiosInstance.get<UserProfileResponse>(
    API_ROUTE.USER.GET_PROFILE
  );
  return data;
};
const getUserProperties = async () => {
  const { data } = await protectedAxiosInstance.get<PropertiesResponse>(
    API_ROUTE.USER.GET_PROPERTIES
  );
  return data;
};
const getUserFavoriteProperties = async () => {
  const { data } = await protectedAxiosInstance.get<PropertiesResponse>(
    API_ROUTE.USER.GET_FAVORITE_PROPERTIES
  );
  return data;
};
const addImage = async (body: AddImageBody) => {
  const { data } = await protectedAxiosInstance.post<UserProfileResponse>(
    API_ROUTE.USER.ADD_IMAGE,
    body
  );
  return data;
};
export {
  getUserProfile,
  getUserProperties,
  getUserFavoriteProperties,
  addImage,
};
