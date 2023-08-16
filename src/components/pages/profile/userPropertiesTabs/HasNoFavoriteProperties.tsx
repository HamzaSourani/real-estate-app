import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Stack, Typography } from "@mui/material";
import NAVIGATION from "@/constants/navigation";

const HasNoFavoriteProperties = () => {
  const { t } = useTranslation();
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      height={400}
      width={"100%"}
    >
      <Typography variant="h5" textAlign={"center"} component={"p"}>
        <Box component={"span"}>
          {t("pages.profile.do-not-have-favorite-properties")}
        </Box>
        <Link to={NAVIGATION.MAIN_PAGES.HOME}>{t("common.home")}</Link>
      </Typography>
    </Stack>
  );
};

export default HasNoFavoriteProperties;
