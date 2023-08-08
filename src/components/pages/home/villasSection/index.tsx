import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import { Box, alpha } from "@mui/material";
import SectionLabel from "@/components/other/sectionLabel";
import NAVIGATION from "@/constants/navigation";
import { useGetVillasPropertiesQuery } from "@/api/property/queries";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProperCard from "@/components/items/cards/property";
const VillasSection = () => {
  const { data, isLoading, isError } = useGetVillasPropertiesQuery();
  if (isLoading) return <></>;
  if (isError) return <></>;
  return (
    <Box
      sx={{
        bgcolor: (theme) => alpha(theme.palette.primary.dark, 0.1),
        px: 5,
        pt: 2,
        my: 1,
        pb: 7,
      }}
    >
      <SectionLabel label="common.villas" href={NAVIGATION.MAIN_PAGES.VILLAS} />
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        style={{ width: "100%", height: "100%" }}
      >
        {data.data.properties.map((property, index) => (
          <SwiperSlide key={property.id}>
            <ProperCard {...property} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default VillasSection;
