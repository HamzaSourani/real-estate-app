export interface Props {
  open: boolean;
  handleClose: () => void;
}
export interface ChangePasswordFormValues {
  old_password: string;
  new_password: string;
  new_password_confirmation: string;
}
