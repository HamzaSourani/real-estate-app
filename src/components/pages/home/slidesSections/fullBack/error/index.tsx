import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { FULL_BACK_CONTAINER_STYLE } from "../style";
import { Props } from "../type";

const ErrorPropertiesSlide = ({ isBgColor = false, message }: Props) => {
  return (
    <Box
      sx={{
        bgcolor: isBgColor
          ? (theme) => alpha(theme.palette.primary.dark, 0.1)
          : "inherit",
        ...FULL_BACK_CONTAINER_STYLE,
      }}
    >
      <Typography
        variant="h5"
        color={"error"}
        textAlign={"center"}
        component={"p"}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default ErrorPropertiesSlide;
