import { Typography } from "@mui/material";
import { toast, ToastOptions } from "react-toastify";

const componentAs = "h6";
const variant = "h6";

export const showSuccess = (message: string, _ToastOptions?: ToastOptions) =>
  toast.success(
    <div>
      <Typography
        data-cy="success-toast"
        variant={variant}
        component={componentAs}
      >
        {message}
      </Typography>
    </div>,
    _ToastOptions
  );

export const showError = (message: string, _ToastOptions?: ToastOptions) => {
  toast.error(
    <div>
      <Typography
        data-cy="error-toast"
        variant={variant}
        component={componentAs}
      >
        {message}
      </Typography>
    </div>,

    _ToastOptions
  );
};

export const showWarn = (message: string, _ToastOptions?: ToastOptions) =>
  toast.warn(
    <div>
      <Typography
        data-cy="warn-toast"
        variant={variant}
        component={componentAs}
      >
        {message}
      </Typography>
    </div>,
    _ToastOptions
  );
