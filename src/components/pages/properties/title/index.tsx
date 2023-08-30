import React, { FC, PropsWithChildren } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Stack, Typography } from "@mui/material";
import { PropertiesParams } from "@/pages/properties/type";
const PropertyTitle: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { t } = useTranslation();
  const { propertyType } = useParams<PropertiesParams>();
  const handleLabel = () => {
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
      direction={"row"}
      my={2}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
    >
      <Typography fontWeight={"600"} variant="h4" component={"p"}>
        {t(handleLabel())}
      </Typography>
      {children}
    </Stack>
  );
};

export default PropertyTitle;
