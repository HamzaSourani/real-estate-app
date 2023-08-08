import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import { Box } from "@mui/material";
import SectionLabel from "@/components/other/sectionLabel";
import NAVIGATION from "@/constants/navigation";
import { useGetChaletsPropertiesQuery } from "@/api/property/queries";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProperCard from "@/components/items/cards/property";
const ChaletsSection = () => {
  const { data, isLoading, isError } = useGetChaletsPropertiesQuery();
  if (isLoading) return <></>;
  if (isError) return <></>;
  return (
    <Box
      sx={{
        px: 5,
        pt: 2,
        my: 1,
        pb: 7,
      }}
    >
      <SectionLabel
        label="common.chalets"
        href={NAVIGATION.MAIN_PAGES.CHALETS}
      />
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={20}
        slidesPerView={4}
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

export default ChaletsSection;
