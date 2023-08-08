import { GenericResponse } from "../type";

export type PropertiesResponse = GenericResponse<{
  properties: Property[];
}>;

export interface Property {
  id: number;
  name: string;
  contract_type: number;
  bed_rooms: number;
  sqft_living: number;
  price: number;
  is_favorite: boolean;
  favorite_count: number;
  views_count: number;
  image: Image;
}

export interface Image {
  media_url: string;
  hash: string;
}
