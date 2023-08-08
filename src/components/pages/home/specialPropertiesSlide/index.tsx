import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import { Box, Paper } from "@mui/material";
import { useGetSpecialPropertiesQuery } from "@/api/property/queries";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SpecialPropertiesSlide = () => {
  const { data, isLoading, isError } = useGetSpecialPropertiesQuery();
  if (isLoading) return <></>;
  if (isError) return <></>;
  return (
    <Box
      height={{ xs: 100, sm: 200, md: 300, lg: 400 }}
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"}
    >
      <Paper sx={{ width: "80%", height: "100%", borderRadius: "1rem" }}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          spaceBetween={20}
          navigation
          autoplay
          pagination={{ clickable: true }}
          style={{ width: "100%", height: "100%" }}
        >
          {data.data.properties.map((property, index) => (
            <SwiperSlide key={property.id}>
              <Box
                src={property.image.media_url}
                component={"img"}
                sx={{
                  objectFit: "cover",
                  overflow: "hidden",
                  borderRadius: "1rem",
                }}
                width={"100%"}
                height={"100%"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Paper>
    </Box>
  );
};

export default SpecialPropertiesSlide;
