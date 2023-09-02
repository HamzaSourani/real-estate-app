import { useTranslation } from "react-i18next";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import {
  Dialog,
  DialogActions,
  Button,
  DialogTitle,
  DialogContent,
  Stack,
} from "@mui/material";
import LoadingButton from "@/components/other/loadingButton/LoadingButton";
import { useChangePasswordMutation } from "@/api/user/qeuries";
import { showError, showSuccess } from "@/libs/reactToastify";
import PasswordField from "../../inputs/passwordField";
import Transition from "../transition";
import { ChangePasswordFormValues, Props } from "./type";

const ChangePassword = ({ open, handleClose }: Props) => {
  const { t } = useTranslation();
  const { mutate: changePassword } = useChangePasswordMutation();
  const initialValues: ChangePasswordFormValues = {
    old_password: "",
    new_password: "",
    new_password_confirmation: "",
  };
  const validationSchema = Yup.object().shape({
    old_password: Yup.string()
      .required(t("form-validation.required"))
      .min(8, t("form-validation.min-to", { number: 8 })),
    new_password: Yup.string()
      .required(t("form-validation.required"))
      .min(8, t("form-validation.min-to", { number: 8 })),
    new_password_confirmation: Yup.string()
      .required(t("form-validation.required"))
      .min(8, t("form-validation.min-to", { number: 8 }))
      .oneOf(
        [Yup.ref("new_password")],
        t("form-validation.password-confirmation")
      ),
  });
  const handleChangePassword = (
    values: ChangePasswordFormValues,
    { setSubmitting }: FormikHelpers<ChangePasswordFormValues>
  ) => {
    changePassword(values, {
      onSuccess() {
        showSuccess(t("components.change-password-dialog.success"));
        handleClose();
      },
      onError() {
        showError(t("components.change-password-dialog.failed"));
        setSubmitting(false);
      },
    });
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      fullWidth
      maxWidth={"sm"}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleChangePassword}
      >
        {({ values, isSubmitting, touched, errors, handleChange }) => {
          return (
            <Form>
              <DialogTitle>
                {t("components.change-password-dialog.title")}
              </DialogTitle>
              <DialogContent>
                <Stack spacing={2}>
                  <PasswordField
                    name="old_password"
                    label={t("components.change-password-dialog.old-password")}
                    fullWidth
                    value={values.old_password}
                    onChange={handleChange}
                    error={!!(touched.old_password && errors.old_password)}
                    helperText={
                      touched.old_password && errors.old_password
                        ? errors.old_password
                        : ""
                    }
                  />
                  <PasswordField
                    name="new_password"
                    label={t("components.change-password-dialog.new-password")}
                    fullWidth
                    value={values.new_password}
                    onChange={handleChange}
                    error={!!(touched.new_password && errors.new_password)}
                    helperText={
                      touched.new_password && errors.new_password
                        ? errors.new_password
                        : ""
                    }
                  />
                  <PasswordField
                    name="new_password_confirmation"
                    label={t(
                      "components.change-password-dialog.new-password-confirmation"
                    )}
                    fullWidth
                    value={values.new_password_confirmation}
                    onChange={handleChange}
                    error={
                      !!(
                        touched.new_password_confirmation &&
                        errors.new_password_confirmation
                      )
                    }
                    helperText={
                      touched.new_password_confirmation &&
                      errors.new_password_confirmation
                        ? errors.new_password_confirmation
                        : ""
                    }
                  />
                </Stack>
              </DialogContent>
              <DialogActions>
                <Stack direction={"row"} spacing={2}>
                  <LoadingButton
                    buttonText={t("components.change-password-dialog.change")}
                    isSubmitting={isSubmitting}
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleClose}
                  >
                    {t("common.cancel")}
                  </Button>
                </Stack>
              </DialogActions>
            </Form>
          );
        }}
      </Formik>
    </Dialog>
  );
};

export default ChangePassword;
