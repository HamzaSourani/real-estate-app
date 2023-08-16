import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Stack, Typography } from "@mui/material";
import NAVIGATION from "@/constants/navigation";

const HasNoProperties = () => {
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
          {t("pages.profile.do-not-have-properties")}
        </Box>
        <Link to={NAVIGATION.MAIN_PAGES.ADD_PROPERTY}>
          {t("common.add-property")}
        </Link>
      </Typography>
    </Stack>
  );
};

export default HasNoProperties;
