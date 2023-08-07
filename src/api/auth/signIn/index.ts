import publicAxiosInstance from "@/api/publicAxiosInstance";
import API_ROUTE from "@/constants/apiRoute";
import { SignInPayload } from "./type";
import { UserInfoResponse } from "../type";

const signIn = async ({ body }: SignInPayload) => {
  const { data } = await publicAxiosInstance.post<UserInfoResponse>(
    API_ROUTE.SIGN_IN.INDEX,
    body
  );
  return data;
};
export { signIn };
