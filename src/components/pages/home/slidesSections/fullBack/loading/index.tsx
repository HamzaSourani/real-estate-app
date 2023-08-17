import { Swiper, SwiperSlide } from "swiper/react";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import SkeletonProperCard from "@/components/items/cards/property/skeleton";
import { Props } from "../type";

const LoadingPropertiesSlide = ({ isBgColor = false }: Props) => {
  return (
    <Box
      sx={{
        bgcolor: isBgColor
          ? (theme) => alpha(theme.palette.primary.dark, 0.1)
          : "inherit",
        px: 5,
        pt: 2,
        my: 1,
        pb: 7,
      }}
    >
      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"}
        style={{ width: "100%", height: "100%" }}
      >
        {Array.from(new Array(5)).map((card) => (
          <SwiperSlide className="slide-section" key={card}>
            <SkeletonProperCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default LoadingPropertiesSlide;
