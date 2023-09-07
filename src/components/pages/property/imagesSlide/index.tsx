import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import { Box } from "@mui/material";
import Empty from "./empty";
import { Props } from "./type";

const PropertyImagesSlide = ({ images }: Props) => {
  if (!!!images.length) return <Empty />;
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: 200, sm: 250, md: 350, lg: 400 },
        borderRadius: "1rem",
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={20}
        navigation
        autoplay
        pagination={{ clickable: true }}
        style={{ width: "100%", height: "100%" }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Box
              src={image.media_url}
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
    </Box>
  );
};

export default PropertyImagesSlide;
