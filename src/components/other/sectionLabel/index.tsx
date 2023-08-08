import React from "react";
import { Props } from "./type";
import { Stack, Typography, Link as MuiLink } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SectionLabel = ({ label, href }: Props) => {
  const { t } = useTranslation();
  return (
    <Stack
      direction={"row"}
      my={2}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
    >
      <Typography fontWeight={"600"} variant="h4" component={"p"}>
        {t(label)}
      </Typography>
      <MuiLink component={Link} to={href}>
        {t("common.show-more")}
      </MuiLink>
    </Stack>
  );
};

export default SectionLabel;
