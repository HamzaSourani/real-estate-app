import API_ROUTE from "@/constants/apiRoute";
import protectedAxiosInstance from "../protectedAxiosInstance";
import { AddImageBody, UserProfileResponse } from "./type";

const getUserProfile = async () => {
  const { data } = await protectedAxiosInstance.get<UserProfileResponse>(
    API_ROUTE.USER.GET_PROFILE
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
export { getUserProfile, addImage };
