import React from "react";
import { FormikHelpers } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { useGetAllCitiesQuery } from "@/api/city/queries";
import { showError } from "@/libs/reactToastify";
import {
  useCheckEmail,
  useCheckUserName,
  useSignUp,
} from "@/api/auth/signUp/queries";
import { InitialValues } from "./type";
const useSignUpLogic = () => {
  const { t } = useTranslation();
  const { data: cities, isLoading: isCityLoading } = useGetAllCitiesQuery();
  const { mutate: checkUserName, data: checkUserNameData } = useCheckUserName();
  const { mutate: checkEmail, data: checkEmailData } = useCheckEmail();
  const { mutate: signUp } = useSignUp();
  const handleSignUp = (
    values: InitialValues,
    { setSubmitting }: FormikHelpers<InitialValues>
  ) => {
    const {
      full_name,
      user_name,
      email,
      city,
      password,
      password_confirmation,
    } = values;
    checkUserName(
      { body: { user_name } },
      {
        onSuccess(data, variables, context) {
          if (data.success) {
            checkEmail(
              { body: { email } },
              {
                onSuccess(data, variables, context) {
                  if (data.success) {
                    signUp(
                      {
                        body: {
                          full_name,
                          user_name,
                          email,
                          city_id: city?.id!,
                          password,
                          password_confirmation,
                        },
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
                  } else {
                    setSubmitting(false);
                  }
                },
                onError(error, variables, context) {
                  showError(t("common.something-went-wrong"));
                  setSubmitting(false);
                },
              }
            );
          } else setSubmitting(false);
        },
        onError(error, variables, context) {
          showError(t("common.something-went-wrong"));
          setSubmitting(false);
        },
      }
    );
  };
  const validationSchema = Yup.object().shape({
    full_name: Yup.string().required(t("form-validation.required")),
    user_name: Yup.string().required(t("form-validation.required")),
    email: Yup.string()
      .email(t("form-validation.email"))
      .required(t("form-validation.required")),
    city: Yup.object()
      .shape({ id: Yup.string(), label: Yup.string() })
      .required(t("form-validation.requied")),
    password: Yup.string()
      .required(t("form-validation.required"))
      .min(8, t("form-validaton.min-to", { number: 8 })),
    password_confirmation: Yup.string()
      .required(t("form-validation.required"))
      .min(8, t("form-validaton.min-to", { number: 8 }))
      .oneOf([Yup.ref("password")], t("form-validation.password-confirmation")),
  });
  const initialValues: InitialValues = {
    full_name: "",
    user_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    city: null,
  };
  return {
    t,
    cities,
    isCityLoading,
    checkUserNameData,
    checkEmailData,
    validationSchema,
    initialValues,
    handleSignUp,
  };
};

export default useSignUpLogic;
