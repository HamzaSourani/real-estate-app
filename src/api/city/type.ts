import { GenericResponse } from "../type";
export interface Data {
  cities: City[];
}

export interface City {
  id: string;
  label: string;
}
export type GetAllCitiesResponse = GenericResponse<Data>;
