import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Stack, Typography, alpha } from "@mui/material";
import { PropertiesParams } from "@/pages/properties/type";

const Empty = () => {
  const { t } = useTranslation();
  const { propertyType } = useParams<PropertiesParams>();
  const findPropertyType = () => {
    switch (propertyType) {
      case "chalet":
        return "common.chalets";
      case "house":
        return "common.houses";
      case "villa":
        return "common.villas";
      default:
        return "common.properties";
    }
  };
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        py: 4,
        px: 2,
        width: "100%",
        height: "calc(100vh - 69px)",
        bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
      }}
    >
      <Typography variant="h5" textAlign={"center"} component={"p"}>
        {`${t("common.property.empty")} ${findPropertyType()}`}
      </Typography>
    </Stack>
  );
};

export default Empty;
