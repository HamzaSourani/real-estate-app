import { Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { Props } from "./type";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { RATES } from "@/constants/property";

const ReviewProperty = ({ view, condition, grade }: Props) => {
  const { t } = useTranslation();
  console.log(grade);
  return (
    <Grid container spacing={{ xs: 1, sm: 2 }}>
      <Grid item xs={12} md={6}>
        <Paper elevation={2} sx={{ p: 1 }}>
          <Stack alignItems={"center"} spacing={1}>
            <Typography
              textAlign={"center"}
              fontSize={{ md: "1.2rem" }}
              color={"primary"}
              fontWeight={"bold"}
            >
              {t("common.property.view")}
            </Typography>
            <Stack direction={"row"} spacing={1}>
              {Object.values(RATES).map((rate, index) => (
                <Typography
                  key={index}
                  sx={{
                    py: 0.5,
                    px: 1,
                    borderRadius: 1,
                    bgcolor: index === view ? "primary.main" : " gray",
                    color: index === view ? "common.white" : "GrayText",
                  }}
                >
                  {t(`common.rates.${rate}`)}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={2} sx={{ p: 1 }}>
          <Stack alignItems={"center"} spacing={1}>
            <Typography
              textAlign={"center"}
              fontSize={{ md: "1.2rem" }}
              color={"primary"}
              fontWeight={"bold"}
            >
              {t("common.property.condition")}
            </Typography>
            <Stack direction={"row"} spacing={1}>
              {Object.values(RATES).map((rate, index) => (
                <Typography
                  key={index}
                  sx={{
                    py: 0.5,
                    px: 1,
                    borderRadius: 1,
                    bgcolor: index + 1 === condition ? "primary.main" : " gray",
                    color:
                      index + 1 === condition ? "common.white" : "GrayText",
                  }}
                >
                  {t(`common.rates.${rate}`)}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} sx={{ p: 1 }}>
          <Stack alignItems={"center"} spacing={1}>
            <Typography
              textAlign={"center"}
              fontSize={{ md: "1.2rem" }}
              color={"primary"}
              fontWeight={"bold"}
            >
              {t("common.property.grade")}
            </Typography>
            <Stack direction={"row"} spacing={1}>
              {Object.values(Array.from(new Array(12))).map((_, index) => (
                <Typography
                  key={index}
                  sx={{
                    py: 0.5,
                    px: 1,
                    borderRadius: 1,
                    bgcolor: index + 1 === grade ? "primary.main" : " gray",
                    color: index + 1 === grade ? "common.white" : "GrayText",
                  }}
                >
                  {index + 1}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ReviewProperty;
