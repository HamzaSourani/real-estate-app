import {
  InfiniteData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { PROPERTIES_TABS } from "@/components/pages/profile/userPropertiesTabs/type";
import {
  addImage,
  getUserFavoriteProperties,
  getUserProperties,
  getUserProfile,
  toggleFavorite,
  changePassword,
} from ".";
import {
  AddImageBody,
  ChangePasswordBody,
  ToggleFavoriteParams,
  UserPropertiesQueryParams,
} from "./type";
import {
  PropertiesResponse,
  Property,
  PropertyResponse,
} from "../property/type";

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
const useToggleFavoriteMutation = (
  queryKey: (string | number)[],
  propertyId: string
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["add-to-favorite"],
    mutationFn: (params: ToggleFavoriteParams) => toggleFavorite(params),
    onMutate() {
      queryClient.cancelQueries(queryKey);
      const previousProperties = queryClient.getQueryData(queryKey);
      console.log(previousProperties, "property", queryKey);
      queryClient.setQueriesData(
        queryKey,
        (
          previousProperties:
            | InfiniteData<{
                data: PropertiesResponse;
                pageParam: any;
              }>
            | PropertiesResponse
            | PropertyResponse
            | undefined
        ): PropertiesResponse | PropertyResponse | undefined => {
          if (previousProperties) {
            if ("pages" in previousProperties) {
              return undefined; //if pagination then don't do optimistic update
            } else if ("properties" in previousProperties.data) {
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
            } else if ("property" in previousProperties.data) {
              return {
                ...previousProperties,
                data: {
                  property: {
                    ...previousProperties?.data.property,
                    favorite_count: previousProperties?.data.property
                      .is_favorite
                      ? previousProperties?.data.property.favorite_count - 1
                      : previousProperties?.data.property.favorite_count + 1,
                    is_favorite: !previousProperties?.data.property.is_favorite,
                  },
                },
              } as PropertyResponse;
            }
          } else return undefined;
        }
      );

      return { previousProperties };
    },
    onError(error, variables, context) {
      queryClient.setQueriesData([queryKey], context?.previousProperties);
    },
    onSettled(data, error, variables, context) {
      queryClient.invalidateQueries({ queryKey: queryKey });
    },
  });
};
const useChangePasswordMutation = () =>
  useMutation({
    mutationKey: ["change-password"],
    mutationFn: (body: ChangePasswordBody) => changePassword(body),
  });

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
  useChangePasswordMutation,
  useAddImageMutation,
};
