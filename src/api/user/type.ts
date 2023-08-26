import { AutocompleteObject } from "@/type";
import { GenericResponse } from "../type";
import { PROPERTIES_TABS } from "@/components/pages/profile/userPropertiesTabs/type";

export type UserProfileResponse = GenericResponse<UserProfile>;
export interface UserProfile {
  user: User;
}

export interface User {
  id: number;
  full_name: string;
  city: AutocompleteObject;
  email: string;
  image: Image;
}

export interface City {
  id: number;
  label: string;
}

export interface Image {
  media_url: string;
  hash: string;
}
export interface AddImageBody {
  image: string;
}
export interface UserPropertiesQueryParams {
  tab: PROPERTIES_TABS;
}
