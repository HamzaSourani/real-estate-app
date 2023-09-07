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
  getPriceRange,
  getAreaRange,
  getProperty,
} from ".";
import {
  AddFeatureBody,
  AddPropertyBody,
  DeletePropertyParams,
  PredictPriceOfPropertyBody,
  PropertyFilters,
} from "./type";
import { Params } from "@/type";
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
const useGetPropertyQuery = (params: Params) => {
  return useQuery({
    queryKey: ["get-property", params.propertyId],
    queryFn: () => getProperty(params),
  });
};
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
const useGetPriceRangeQuery = () =>
  useQuery({
    queryKey: ["get-price-range"],
    queryFn: () => getPriceRange(),
  });
const useGetAreaRangeQuery = () =>
  useQuery({
    queryKey: ["get-area-range"],
    queryFn: () => getAreaRange(),
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
  useGetPropertyQuery,
  useGetVillasPropertiesQuery,
  useGetChaletsPropertiesQuery,
  useGetHousesPropertiesQuery,
  useGetRegionsQuery,
  useGetPropertyTypesQuery,
  useGetFurnishesQuery,
  useGetCladdingsQuery,
  useGetFeaturesQuery,
  useGetPriceRangeQuery,
  useGetAreaRangeQuery,
  useAddFeatureMutation,
  usePredictPriceOfPropertyMutation,
  useAddPropertyMutation,
  useDeletePropertyMutation,
};
