import React from "react";
import { Box } from "@mui/material";
import SpecialPropertiesSlide from "@/components/pages/home/specialPropertiesSlide";
import VillasSection from "@/components/pages/home/villasSection";
import ChaletsSection from "@/components/pages/home/chaletsSection";
import HousesSection from "@/components/pages/home/housesSection";

const Home = () => {
  return (
    <Box>
      <SpecialPropertiesSlide />
      <VillasSection />
      <ChaletsSection />
      <HousesSection />
    </Box>
  );
};

export default Home;
