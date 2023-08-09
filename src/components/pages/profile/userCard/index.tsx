import React from "react";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";
import { Box, Paper, Stack, Tooltip, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import UserImageField from "@/components/items/inputs/imageField/userImageField";
import { UserProfileResponse } from "@/api/user/type";
const UserCard = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const userProfile: UserProfileResponse | undefined = queryClient.getQueryData(
    ["get-user-profile"]
  );
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
          {userProfile?.data.user.full_name}
        </Typography>
        <Typography
          variant="h5"
          component={"p"}
          color="primary"
          textAlign={"center"}
          my={1}
        >
          {userProfile?.data.user.email}
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
          <Typography>{userProfile?.data.user.city.label}</Typography>
        </Stack>
      </Paper>
    </Box>
  );
};

export default UserCard;
