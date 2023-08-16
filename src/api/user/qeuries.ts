import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addImage,
  getUserFavoriteProperties,
  getUserProperties,
  getUserProfile,
} from ".";
import { AddImageBody, UserPropertiesQueryParams } from "./type";
import { PROPERTIES_TABS } from "@/components/pages/profile/userPropertiesTabs/type";

const useGetUserProfile = (isAuthorized: boolean) =>
  useQuery({
    queryKey: ["get-user-profile"],
    queryFn: () => getUserProfile(),
    enabled: isAuthorized,
  });
const useGetUserProperties = ({ tab }: UserPropertiesQueryParams) =>
  useQuery({
    queryKey: ["get-user-properties"],
    queryFn: () => getUserProperties(),
    enabled: tab === PROPERTIES_TABS.USER_PROPERTIES,
  });
const useGetUserFavoriteProperties = ({ tab }: UserPropertiesQueryParams) =>
  useQuery({
    queryKey: ["get-user-favorite-properties"],
    queryFn: () => getUserFavoriteProperties(),
    enabled: tab === PROPERTIES_TABS.USER_FAVORITE_PROPERTIES,
  });
const useAddImageMutation = () =>
  useMutation({
    mutationKey: ["add-user-image"],
    mutationFn: (body: AddImageBody) => addImage(body),
  });
export {
  useGetUserProfile,
  useAddImageMutation,
  useGetUserProperties,
  useGetUserFavoriteProperties,
};
