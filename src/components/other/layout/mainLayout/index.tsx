import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./navbar";

const MainLayout = () => {
  return (
    <Box>
      <Navbar />
      {<Outlet />}
    </Box>
  );
};

export default MainLayout;
