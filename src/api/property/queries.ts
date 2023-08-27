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
import { PropertyType } from "@/type";
import {
  AddFeatureBody,
  AddPropertyBody,
  PredictPriceOfPropertyBody,
} from "./type";

const useGetSpecialPropertiesQuery = () =>
  useQuery({
    queryKey: ["get-special-properties"],
    queryFn: () => getSpecialProperties(),
  });
const useGetVillasPropertiesQuery = () =>
  useQuery({
    queryKey: ["get-villas-properties"],
    queryFn: () => getProperties({ type_id: PropertyType.VILLA }),
  });
const useGetChaletsPropertiesQuery = () =>
  useQuery({
    queryKey: ["get-chalets-properties"],
    queryFn: () => getProperties({ type_id: PropertyType.CHALET }),
  });
const useGetHousesPropertiesQuery = () =>
  useQuery({
    queryKey: ["get-houses-properties"],
    queryFn: () => getProperties({ type_id: PropertyType.HOUSE }),
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
