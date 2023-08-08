import { useQuery } from "@tanstack/react-query";
import { getAllProperties, getSpecialProperties } from ".";
import { PropertyType } from "@/type";

const useGetSpecialPropertiesQuery = () =>
  useQuery({
    queryKey: ["get-special-properties"],
    queryFn: () => getSpecialProperties(),
  });
const useGetVillasPropertiesQuery = () =>
  useQuery({
    queryKey: ["get-villas-properties"],
    queryFn: () => getAllProperties({ type_id: PropertyType.VILLA }),
  });
const useGetChaletsPropertiesQuery = () =>
  useQuery({
    queryKey: ["get-chalets-properties"],
    queryFn: () => getAllProperties({ type_id: PropertyType.CHALET }),
  });
const useGetHousesPropertiesQuery = () =>
  useQuery({
    queryKey: ["get-houses-properties"],
    queryFn: () => getAllProperties({ type_id: PropertyType.HOUSE }),
  });
export {
  useGetSpecialPropertiesQuery,
  useGetVillasPropertiesQuery,
  useGetChaletsPropertiesQuery,
  useGetHousesPropertiesQuery,
};
