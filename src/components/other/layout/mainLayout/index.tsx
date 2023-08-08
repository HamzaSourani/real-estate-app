import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./navbar";

const MainLayout = () => {
  return (
    <Box>
      <Navbar />
      <Box mt={2}>{<Outlet />}</Box>
    </Box>
  );
};

export default MainLayout;
