import { useTranslation } from "react-i18next";
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import NAVIGATION from "@/constants/navigation";

const Forbidden = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Typography variant="h2" component={"p"} color={"primary"}>
        {t("pages.forbidden.title")}
      </Typography>
      <Stack direction={"row"} spacing={1}>
        <Link to={`/${NAVIGATION.AUTH.INDEX}/${NAVIGATION.AUTH.SIGN_IN}`}>
          {t("pages.auth.sign-in.title")}
        </Link>
        <Link to={`/${NAVIGATION.AUTH.INDEX}/${NAVIGATION.AUTH.SIGN_UP}`}>
          {t("pages.auth.sign-up.title")}
        </Link>
      </Stack>
    </Box>
  );
};

export default Forbidden;
