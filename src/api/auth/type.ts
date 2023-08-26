import { AutocompleteObject } from "@/type";
import { GenericResponse } from "../type";

export type UserInfoResponse = GenericResponse<UserInfo>;
export interface UserInfo {
  user: User;
  authorisation: Authorisation;
}

export interface Authorisation {
  token: string;
  type: string;
}

export interface User {
  id: number;
  full_name: string;
  user_name: string;
  email: string;
  city: AutocompleteObject;
  image: Image;
}

export interface Image {
  media_url: string;
  hash: string;
}
