import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PROPERTIES_TABS } from "@/components/pages/profile/userPropertiesTabs/type";
import {
  addImage,
  getUserFavoriteProperties,
  getUserProperties,
  getUserProfile,
  toggleFavorite,
} from ".";
import {
  AddImageBody,
  ToggleFavoriteParams,
  UserPropertiesQueryParams,
} from "./type";
import { PropertiesResponse, Property } from "../property/type";

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
const useToggleFavoriteMutation = (queryKey: string, propertyId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["add-to-favorite"],
    mutationFn: (params: ToggleFavoriteParams) => toggleFavorite(params),
    onMutate() {
      queryClient.cancelQueries([queryKey]);
      const previousProperties = queryClient.getQueryData([queryKey]);
      queryClient.setQueriesData(
        [queryKey],
        (
          previousProperties: PropertiesResponse | undefined
        ): PropertiesResponse | undefined => {
          const properties = previousProperties?.data.properties?.map(
            (property: Property) => {
              if (property.id === propertyId)
                return {
                  ...property,
                  favorite_count: property.is_favorite
                    ? property.favorite_count - 1
                    : property.favorite_count + 1,
                  is_favorite: !property.is_favorite,
                };
              return property;
            }
          );

          return {
            ...previousProperties,
            data: {
              properties,
              total: previousProperties?.data.total,
            },
          } as PropertiesResponse;
        }
      );

      return { previousProperties };
    },
    onError(error, variables, context) {
      queryClient.setQueriesData([queryKey], context?.previousProperties);
    },
    onSettled(data, error, variables, context) {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
  });
};
const useAddImageMutation = () =>
  useMutation({
    mutationKey: ["add-user-image"],
    mutationFn: (body: AddImageBody) => addImage(body),
  });
export {
  useGetUserProfile,
  useGetUserProperties,
  useGetUserFavoriteProperties,
  useToggleFavoriteMutation,
  useAddImageMutation,
};
