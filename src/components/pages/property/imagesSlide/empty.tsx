import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Empty = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        height: { xs: 200, sm: 250, md: 350, lg: 400 },
        width: "80%",
        m: "auto",
        borderRadius: "1rem",
      }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography variant="h5" textAlign={"center"} component={"p"}>
        {t("pages.home.special-properties.empty")}
      </Typography>
    </Box>
  );
};

export default Empty;
