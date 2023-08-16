import React from "react";
import { useTranslation } from "react-i18next";
import { useGetUserProfile } from "@/api/user/qeuries";
import useAuthorization from "@/hooks/useAuthorization";
import {
  Box,
  Paper,
  Skeleton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import UserImageField from "@/components/items/inputs/imageField/userImageField";
const UserCard = () => {
  const { t } = useTranslation();

  const isAuthorized = useAuthorization();
  const { data: userProfile, isLoading } = useGetUserProfile(isAuthorized);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "centre",
      }}
    >
      <Paper
        sx={{
          width: { xs: "90vw", md: "40vw" },
        }}
      >
        <Box
          sx={{
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: (theme) =>
              `linear-gradient(180deg, ${theme.palette.primary.main} 50%, transparent 50%)`,
          }}
        >
          <UserImageField />
        </Box>

        <Typography
          variant="h3"
          component={"p"}
          color="primary"
          textAlign={"center"}
        >
          {isLoading ? (
            <Skeleton sx={{ m: "auto" }} width={200} />
          ) : (
            userProfile?.data.user.full_name
          )}
        </Typography>
        <Typography
          variant="h5"
          component={"p"}
          color="primary"
          textAlign={"center"}
          my={1}
        >
          {isLoading ? (
            <Skeleton sx={{ m: "auto" }} width={150} />
          ) : (
            userProfile?.data.user.email
          )}
        </Typography>
        <Stack
          mb={5}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={1}
        >
          <Tooltip title={t("components.property-card.city")}>
            <LocationOnIcon color="secondary" />
          </Tooltip>
          <Typography>
            {isLoading ? (
              <Skeleton width={80} />
            ) : (
              userProfile?.data.user.city.label
            )}
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
};

export default UserCard;
