import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import {
  Autocomplete,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import PasswordField from "@/components/items/inputs/passwordField";
import NAVIGATION from "@/constants/navigation";
import LoadingButton from "@/components/other/loadingButton/LoadingButton";
import useSignUpLogic from "./useSignUpLogic";

const SignUp = () => {
  const {
    t,
    cities,
    isCityLoading,
    checkUserNameData,
    checkEmailData,
    validationSchema,
    initialValues,
    handleSignUp,
  } = useSignUpLogic();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSignUp}
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        touched,
        isSubmitting,
        handleChange,
        setFieldValue,
      }) => (
        <Form>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            spacing={2}
            sx={{ width: { xs: "80vw", md: "70vw", lg: "60vw" } }}
          >
            <Grid item xs={12}>
              <Typography fontWeight={"bold"} textAlign={"center"}>
                {t("pages.auth.sign-up.title")}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="full_name"
                label={t("pages.auth.sign-up.full-name")}
                fullWidth
                value={values.full_name}
                onChange={handleChange}
                error={!!(touched.full_name && errors.full_name)}
                helperText={
                  touched.full_name && errors.full_name ? errors.full_name : ""
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="user_name"
                label={t("pages.auth.sign-up.user-name")}
                fullWidth
                value={values.user_name}
                onChange={handleChange}
                error={
                  !!(
                    (touched.user_name && errors.user_name) ||
                    (checkUserNameData && !checkUserNameData?.success)
                  )
                }
                helperText={
                  touched.user_name && errors.user_name
                    ? errors.user_name
                    : checkUserNameData && !checkUserNameData?.success
                    ? checkUserNameData?.message
                    : ""
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="email"
                label={t("pages.auth.sign-up.email")}
                fullWidth
                value={values.email}
                onChange={handleChange}
                error={
                  !!(
                    (touched.email && errors.email) ||
                    (checkEmailData && !checkEmailData?.success)
                  )
                }
                helperText={
                  touched.email && errors.email
                    ? errors.email
                    : checkEmailData && !checkEmailData?.success
                    ? checkEmailData?.message
                    : ""
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Autocomplete
                options={cities?.data.cities ?? []}
                value={values.city}
                onChange={(e, value) => {
                  setFieldValue("city", value);
                }}
                fullWidth
                loading={isCityLoading}
                renderInput={(params: any) => (
                  <TextField
                    {...params}
                    name="city"
                    label={t("pages.auth.sign-up.city")}
                    fullWidth
                    error={!!(touched.city && errors.city)}
                    helperText={touched.city && errors.city ? errors.city : ""}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <PasswordField
                name="password"
                label={t("pages.auth.sign-up.password")}
                fullWidth
                value={values.password}
                onChange={handleChange}
                error={!!(touched.password && errors.password)}
                helperText={
                  touched.password && errors.password ? errors.password : ""
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <PasswordField
                name="password_confirmation"
                label={t("pages.auth.sign-up.password-confirmation")}
                fullWidth
                value={values.password_confirmation}
                onChange={handleChange}
                error={
                  !!(
                    touched.password_confirmation &&
                    errors.password_confirmation
                  )
                }
                helperText={
                  touched.password_confirmation && errors.password_confirmation
                    ? errors.password_confirmation
                    : ""
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                spacing={1}
                m={1}
              >
                <Typography>
                  {t("pages.auth.sign-up.do-not-have-account")}
                </Typography>
                <Link
                  to={`/${NAVIGATION.AUTH.INDEX}/${NAVIGATION.AUTH.SIGN_IN}`}
                >
                  {t("pages.auth.sign-up.title")}
                </Link>
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <LoadingButton
                  buttonText={t("pages.auth.sign-up.title")}
                  isSubmitting={isSubmitting}
                />
              </Stack>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;
