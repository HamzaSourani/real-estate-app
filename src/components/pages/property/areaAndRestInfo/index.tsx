import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Props } from "./type";

const AreaAndRestInfo = ({
  floors,
  floor_level,
  sqft_living,
  sqft_living_15,
  sqft_lot,
  sqft_lot_15,
  sqft_above,
  sqft_basement,
  water_front,
  features,
}: Props) => {
  const { t } = useTranslation();
  const AREAS = [
    { value: sqft_lot, label: "pages.show-property.areas.lot" },
    { value: sqft_lot_15, label: "pages.show-property.areas.lot-15" },
    { value: sqft_living, label: "pages.show-property.areas.living" },
    { value: sqft_living_15, label: "pages.show-property.areas.living-15" },
    { value: sqft_above, label: "pages.show-property.areas.above" },
    { value: sqft_basement, label: "pages.show-property.areas.basement" },
  ];
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Stack direction={"row"} spacing={2}>
          <Paper elevation={2} sx={{ p: 1, display: "flex", gap: 1 }}>
            <Stack
              spacing={1}
              justifyContent={"center"}
              alignItems={"center"}
              direction={"row"}
            >
              <Typography
                sx={{
                  borderRadius: 1,
                  color: "primary.main",
                }}
              >
                {t("common.property.floor-level")}
              </Typography>
              <Typography
                color={"secondary"}
                sx={{
                  textShadow: (theme) =>
                    `0 0 4px ${theme.palette.secondary.light}`,
                }}
              >
                {floor_level}
              </Typography>
            </Stack>
            <Stack
              spacing={1}
              justifyContent={"center"}
              alignItems={"center"}
              direction={"row"}
            >
              <Typography
                sx={{
                  borderRadius: 1,
                  color: "primary.main",
                }}
              >
                {t("common.property.floors")}
              </Typography>
              <Typography
                color={"secondary"}
                sx={{
                  textShadow: (theme) =>
                    `0 0 4px ${theme.palette.secondary.light}`,
                }}
              >
                {floors}
              </Typography>
            </Stack>
          </Paper>

          {water_front === 1 && (
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                py: 1,
                px: 1,
                borderRadius: 1,
                bgcolor: "primary.main",
                color: "common.white",
              }}
            >
              <Typography>{t("common.property.water-front")}</Typography>
            </Stack>
          )}
        </Stack>
      </Grid>
      <Grid item>
        <Paper elevation={2} sx={{ p: 1 }}>
          <Stack alignItems={"center"} spacing={1}>
            <Typography
              textAlign={"center"}
              fontSize={{ md: "1.2rem" }}
              color={"primary"}
              fontWeight={"bold"}
            >
              {t("pages.show-property.areas.title")}
            </Typography>
            <Box display={"flex"} gap={1} flexWrap={"wrap"}>
              {AREAS.map((area, index) => (
                <Stack
                  key={index}
                  spacing={1}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Typography
                    sx={{
                      py: 0.5,
                      px: 1,
                      borderRadius: 1,
                      bgcolor: "primary.main",
                      color: "common.white",
                    }}
                  >
                    {t(area.label)}
                  </Typography>
                  <Typography
                    color={"secondary"}
                    sx={{
                      textShadow: (theme) =>
                        `0 0 4px ${theme.palette.secondary.light}`,
                    }}
                  >
                    {area.value}
                  </Typography>
                </Stack>
              ))}
            </Box>
          </Stack>
        </Paper>
      </Grid>
      {features.length !== 0 && (
        <Grid item>
          <Paper elevation={2} sx={{ p: 1 }}>
            <Stack alignItems={"center"} spacing={1}>
              <Typography
                textAlign={"center"}
                fontSize={{ md: "1.2rem" }}
                color={"primary"}
                fontWeight={"bold"}
              >
                {t("common.property.features")}
              </Typography>
              <Box display={"flex"} gap={1} flexWrap={"wrap"}>
                {features.map((feature, index) => (
                  <Stack
                    key={index}
                    spacing={1}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Typography
                      sx={{
                        py: 0.5,
                        px: 1,
                        borderRadius: 1,
                        bgcolor: "primary.main",
                        color: "common.white",
                      }}
                    >
                      {t(feature.label)}
                    </Typography>
                  </Stack>
                ))}
              </Box>
            </Stack>
          </Paper>
        </Grid>
      )}
    </Grid>
  );
};

export default AreaAndRestInfo;
