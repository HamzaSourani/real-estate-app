import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { useGetUserProfile } from "@/api/user/qeuries";
import useAuthorization from "@/hooks/useAuthorization";
import Navbar from "./navbar";

const MainLayout = () => {
  const isAuthorized = useAuthorization();
  const userProfileQuery = useGetUserProfile(isAuthorized);
  return (
    <Box>
      <Navbar />
      <Box>{<Outlet />}</Box>
    </Box>
  );
};

export default MainLayout;
