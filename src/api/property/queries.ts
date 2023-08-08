import { useQuery } from "@tanstack/react-query";
import { getSpecialProperties } from ".";

const useGetSpecialPropertiesQuery = () =>
  useQuery({
    queryKey: ["get-special-properties"],
    queryFn: () => getSpecialProperties(),
  });
export { useGetSpecialPropertiesQuery };
