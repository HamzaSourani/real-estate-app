import { useTranslation } from "react-i18next";
import { Box, Paper, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Props } from "./type";

const Directions = ({ north, south, east, west }: Props) => {
  const { t } = useTranslation();
  return (
    <Paper elevation={2} sx={{ p: 1 }}>
      <Typography
        textAlign={"center"}
        fontSize={{ md: "1.2rem" }}
        color={"primary"}
        fontWeight={"bold"}
      >
        {t("common.property.directions")}
      </Typography>
      <Stack alignItems={"center"} justifyContent={"center"}>
        <Stack alignItems={"center"} justifyContent={"center"}>
          <Typography
            color={north ? "primary" : "GrayText"}
            sx={north ? { fontWeight: "600", fontSize: "1.2rem" } : {}}
          >
            {t("common.property.north")}
          </Typography>
          <ArrowUpwardIcon
            color={north ? "primary" : "disabled"}
            sx={north ? { fontWeight: "600", fontSize: "1.2rem" } : {}}
          />
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography
              color={west ? "primary" : "GrayText"}
              sx={west ? { fontWeight: "600", fontSize: "1.2rem" } : {}}
            >
              {t("common.property.west")}
            </Typography>
            <ArrowBackIcon
              color={west ? "primary" : "disabled"}
              sx={west ? { fontWeight: "600", fontSize: "1.2rem" } : {}}
            />
          </Stack>
          <Box
            sx={{
              width: 50,
              height: 50,
              borderRadius: "100%",
              border: (theme) => `5px solid ${theme.palette.secondary.main}`,
              bgcolor: "primary.main",
            }}
          ></Box>
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <ArrowForwardIcon
              color={east ? "primary" : "disabled"}
              sx={east ? { fontWeight: "600", fontSize: "1.2rem" } : {}}
            />
            <Typography
              color={east ? "primary" : "GrayText"}
              sx={east ? { fontWeight: "600", fontSize: "1.2rem" } : {}}
            >
              {t("common.property.east")}
            </Typography>
          </Stack>
        </Stack>
        <Stack alignItems={"center"} justifyContent={"center"}>
          <ArrowDownwardIcon
            color={south ? "primary" : "disabled"}
            sx={south ? { fontWeight: "600", fontSize: "1.2rem" } : {}}
          />
          <Typography
            color={south ? "primary" : "GrayText"}
            sx={south ? { fontWeight: "600", fontSize: "1.2rem" } : {}}
          >
            {t("common.property.south")}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Directions;
