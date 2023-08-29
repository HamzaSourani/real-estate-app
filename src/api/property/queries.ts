import { useMutation, useQuery } from "@tanstack/react-query";
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
} from ".";
import { PROPERTY_TYPE } from "@/constants/property";
import {
  AddFeatureBody,
  AddPropertyBody,
  GetPropertyParams,
  PredictPriceOfPropertyBody,
  PropertyFilters,
} from "./type";
const useGetPropertiesQuery = (params: PropertyFilters) =>
  useQuery({
    queryKey: ["get-properties", params.typeId],
    queryFn: () => getProperties(params),
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
const useAddProperty = () =>
  useMutation({
    mutationKey: ["add-property"],
    mutationFn: (body: AddPropertyBody) => addProperty(body),
  });
export {
  useGetPropertiesQuery,
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
  useAddProperty,
};
