import React from "react";
import { FormikHelpers } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { showError } from "@/libs/reactToastify";
import { useSignIn } from "@/api/auth/signIn/queries";
import { InitialValues } from "./type";
const useSignInLogic = () => {
  const { t } = useTranslation();
  const { mutate: signIn } = useSignIn();
  const handleSignIn = (
    values: InitialValues,
    { setSubmitting }: FormikHelpers<InitialValues>
  ) => {
    signIn(
      {
        body: values,
      },
      {
        onSuccess(data, variables, context) {
          localStorage.setItem(
            "token",
            JSON.stringify(data.data.authorisation.token)
          );
          window.location.replace("/");
        },
        onError(error, variables, context) {
          showError(t("common.something-went-wrong"));
          setSubmitting(false);
        },
      }
    );
  };
  const validationSchema = Yup.object().shape({
    user_name: Yup.string().required(t("form-validation.required")),
    password: Yup.string().min(8).required(t("form-validation.required")!),
  });
  const initialValues: InitialValues = {
    user_name: "",
    password: "",
  };
  return {
    t,
    validationSchema,
    initialValues,
    handleSignIn,
  };
};

export default useSignInLogic;
