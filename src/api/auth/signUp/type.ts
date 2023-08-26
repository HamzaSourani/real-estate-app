import { GenericRequestPayload, GenericResponse } from "@/api/type";
import { AutocompleteObject } from "@/type";
interface CheckUserNameBody {
  user_name: string;
}

export type CheckUserNamePayload = GenericRequestPayload<
  CheckUserNameBody,
  null
>;
export type CheckUserNameResponse = GenericResponse<null>;
interface CheckEmailBody {
  email: string;
}

export type CheckEmailPayload = GenericRequestPayload<CheckEmailBody, null>;
export type CheckEmailResponse = GenericResponse<null>;
interface SignUpBody {
  full_name: string;
  user_name: string;
  email: string;
  city_id: string;
  password: string;
  password_confirmation: string;
}
export type SignUpPayload = GenericRequestPayload<SignUpBody, null>;
