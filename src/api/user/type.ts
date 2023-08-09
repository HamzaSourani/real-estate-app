import { SelectObject } from "@/type";
import { GenericResponse } from "../type";

export type UserProfileResponse = GenericResponse<UserProfile>;
export interface UserProfile {
  user: User;
}

export interface User {
  id: number;
  full_name: string;
  city: SelectObject;
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
