import publicAxiosInstance from "@/api/publicAxiosInstance";
import API_ROUTE from "@/constants/apiRoute";
import {
  CheckEmailPayload,
  CheckUserNamePayload,
  SignUpPayload,
  CheckEmailResponse,
  CheckUserNameResponse,
} from "./type";

const checkUserName = async ({ body }: CheckUserNamePayload) => {
  const { data } = await publicAxiosInstance.post<CheckUserNameResponse>(
    API_ROUTE.SIGN_UP.CHECK_USER_NAME,
    body
  );
  return data;
};
const checkEmail = async ({ body }: CheckEmailPayload) => {
  const { data } = await publicAxiosInstance.post<CheckEmailResponse>(
    API_ROUTE.SIGN_UP.CHECK_EMAIL,
    body
  );
  return data;
};
const signUp = async ({ body }: SignUpPayload) => {
  const { data } = await publicAxiosInstance.post(
    API_ROUTE.SIGN_UP.INDEX,
    body
  );
  return data;
};
export { checkUserName, checkEmail, signUp };
