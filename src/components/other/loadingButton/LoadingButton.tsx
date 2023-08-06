import React from "react";
import { Box, Button, CircularProgress } from "@mui/material";
import TProps from "./type";
const LoadingButton = ({ isSubmitting, buttonText, ...props }: TProps) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Button
        {...props}
        variant="contained"
        disabled={isSubmitting}
        aria-disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? (
          <Box
            component={"span"}
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress
              color="secondary"
              size={24}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-12px",
                marginLeft: "-12px",
              }}
            />{" "}
            {buttonText}
          </Box>
        ) : (
          buttonText
        )}
      </Button>
    </Box>
  );
};

export default LoadingButton;
