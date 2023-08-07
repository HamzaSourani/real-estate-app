import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { Grid, Stack, TextField, Typography } from "@mui/material";
import PasswordField from "@/components/items/inputs/passwordField";
import NAVIGATION from "@/constants/navigation";
import LoadingButton from "@/components/other/loadingButton/LoadingButton";
import useSignInLogic from "./useSignInLogic";

const SignIn = () => {
  const { t, validationSchema, initialValues, handleSignIn } = useSignInLogic();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSignIn}
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
            sx={{ width: { xs: "80vw", sm: "60vw", md: "40vw", lg: "30vw" } }}
          >
            <Grid item xs={12}>
              <Typography fontWeight={"bold"} textAlign={"center"}>
                {t("pages.auth.sign-in.title")}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="user_name"
                label={t("pages.auth.sign-in.user-name")}
                fullWidth
                value={values.user_name}
                onChange={handleChange}
                error={!!(touched.user_name && errors.user_name)}
                helperText={
                  touched.user_name && errors.user_name ? errors.user_name : ""
                }
              />
            </Grid>

            <Grid item xs={12}>
              <PasswordField
                name="password"
                label={t("pages.auth.sign-in.password")}
                fullWidth
                value={values.password}
                onChange={handleChange}
                error={!!(touched.password && errors.password)}
                helperText={
                  touched.password && errors.password ? errors.password : ""
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
                  {t("pages.auth.sign-in.do-not-have-account")}
                </Typography>
                <Link
                  to={`/${NAVIGATION.AUTH.INDEX}/${NAVIGATION.AUTH.SIGN_UP}`}
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
                  buttonText={t("pages.auth.sign-in.title")}
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

export default SignIn;
