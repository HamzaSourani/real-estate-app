import { useMutation } from "@tanstack/react-query";
import { SignInPayload } from "./type";
import { signIn } from ".";

const useSignIn = () => {
  return useMutation({
    mutationKey: ["sign-in"],
    mutationFn: (payload: SignInPayload) => signIn(payload),
  });
};
export { useSignIn };
