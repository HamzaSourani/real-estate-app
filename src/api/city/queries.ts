import { useQuery } from "@tanstack/react-query";
import { getAllCities } from ".";

const useGetAllCitiesQuery = () =>
  useQuery({ queryKey: ["get-all-cities"], queryFn: () => getAllCities() });
export { useGetAllCitiesQuery };
