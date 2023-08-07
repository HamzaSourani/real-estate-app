import { GenericRequestPayload, GenericResponse } from "@/api/type";

interface SignInBody {
  user_name: string;
  password: string;
}
export type SignInPayload = GenericRequestPayload<SignInBody, null>;
