import { useMutation } from "@tanstack/react-query";
import { CheckEmailPayload, CheckUserNamePayload, SignUpPayload } from "./type";
import { checkEmail, checkUserName, signUp } from ".";

const useCheckUserName = () => {
  return useMutation({
    mutationKey: ["check-user-name"],
    mutationFn: (payload: CheckUserNamePayload) => checkUserName(payload),
  });
};
const useCheckEmail = () => {
  return useMutation({
    mutationKey: ["check-email"],
    mutationFn: (payload: CheckEmailPayload) => checkEmail(payload),
  });
};
const useSignUp = () => {
  return useMutation({
    mutationKey: ["sign-up"],
    mutationFn: (payload: SignUpPayload) => signUp(payload),
  });
};
export { useCheckUserName, useCheckEmail, useSignUp };
