import UserCard from "@/components/pages/profile/userCard";
import { Box } from "@mui/material";
import React from "react";
import { useGetUserProfile } from "@/api/user/qeuries";
import useAuthorization from "@/hooks/useAuthorization";
const Profile = () => {
  const isAuthorized = useAuthorization();
  const userProfileQuery = useGetUserProfile(isAuthorized);
  return (
    <Box>
      <UserCard />
    </Box>
  );
};

export default Profile;
