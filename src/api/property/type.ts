import { SelectObject } from "@/type";
import { GenericResponse } from "../type";

export type PropertiesResponse = GenericResponse<{
  properties: Property[];
}>;

export interface Property {
  id: number;
  name: string;
  date_of_publish: string;
  contract_type: number;
  bed_rooms: number;
  sqft_living: number;
  price: number;
  is_favorite: boolean;
  favorite_count: number;
  views_count: number;
  city: SelectObject;
  image: Image;
}

export interface Image {
  media_url: string;
  hash: string;
}
