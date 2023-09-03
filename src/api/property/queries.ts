import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { PROPERTY_TYPE } from "@/constants/property";
import {
  getProperties,
  getSpecialProperties,
  getRegions,
  getPropertyTypes,
  getFurnishes,
  getCladdings,
  getFeatures,
  addFeature,
  predictPriceOfProperty,
  addProperty,
  deleteProperty,
} from ".";
import {
  AddFeatureBody,
  AddPropertyBody,
  DeletePropertyParams,
  PredictPriceOfPropertyBody,
  PropertyFilters,
} from "./type";
const useGetPropertiesInfinityQuery = (params: PropertyFilters) =>
  useInfiniteQuery({
    queryKey: ["get-properties", params.typeId],
    queryFn: async ({ pageParam = 1 }) => {
      const data = await getProperties({
        ...params,
        page: pageParam,
        perPage: 12,
      });
      return { data, pageParam };
    },
    getNextPageParam(lastPage, allPages) {
      if (
        allPages.reduce(
          (acc, pre) => acc + pre.data.data.properties.length,
          0
        ) < lastPage.data.data.total
      ) {
        return lastPage.pageParam + 1;
      }
      return undefined;
    },
  });
const useGetSpecialPropertiesQuery = () =>
  useQuery({
    queryKey: ["get-special-properties"],
    queryFn: () => getSpecialProperties(),
  });
const useGetVillasPropertiesQuery = () =>
  useQuery({
    queryKey: ["get-villas-properties"],
    queryFn: () => getProperties({ typeId: PROPERTY_TYPE.villa }),
  });
const useGetChaletsPropertiesQuery = () =>
  useQuery({
    queryKey: ["get-chalets-properties"],
    queryFn: () => getProperties({ typeId: PROPERTY_TYPE.chalet }),
  });
const useGetHousesPropertiesQuery = () =>
  useQuery({
    queryKey: ["get-houses-properties"],
    queryFn: () => getProperties({ typeId: PROPERTY_TYPE.house }),
  });
const useGetRegionsQuery = () =>
  useQuery({
    queryKey: ["get-regions"],
    queryFn: () => getRegions(),
  });
const useGetPropertyTypesQuery = () =>
  useQuery({
    queryKey: ["get-property-types"],
    queryFn: () => getPropertyTypes(),
  });

const useGetFurnishesQuery = () =>
  useQuery({
    queryKey: ["get-furnishes"],
    queryFn: () => getFurnishes(),
  });
const useGetCladdingsQuery = () =>
  useQuery({
    queryKey: ["get-claddings"],
    queryFn: () => getCladdings(),
  });
const useGetFeaturesQuery = () =>
  useQuery({
    queryKey: ["get-features"],
    queryFn: () => getFeatures(),
  });
const useAddFeatureMutation = () =>
  useMutation({
    mutationKey: ["add-feature"],
    mutationFn: (body: AddFeatureBody) => addFeature(body),
  });
const usePredictPriceOfPropertyMutation = () =>
  useMutation({
    mutationKey: ["predict-price-of-property"],
    mutationFn: (body: PredictPriceOfPropertyBody) =>
      predictPriceOfProperty(body),
  });
const useAddPropertyMutation = () =>
  useMutation({
    mutationKey: ["add-property"],
    mutationFn: (body: AddPropertyBody) => addProperty(body),
  });
const useDeletePropertyMutation = () =>
  useMutation({
    mutationKey: ["delete-property"],
    mutationFn: (params: DeletePropertyParams) => deleteProperty(params),
  });
export {
  useGetPropertiesInfinityQuery,
  useGetSpecialPropertiesQuery,
  useGetVillasPropertiesQuery,
  useGetChaletsPropertiesQuery,
  useGetHousesPropertiesQuery,
  useGetRegionsQuery,
  useGetPropertyTypesQuery,
  useGetFurnishesQuery,
  useGetCladdingsQuery,
  useGetFeaturesQuery,
  useAddFeatureMutation,
  usePredictPriceOfPropertyMutation,
  useAddPropertyMutation,
  useDeletePropertyMutation,
};
