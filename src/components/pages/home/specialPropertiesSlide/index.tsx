import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import { Box, Paper } from "@mui/material";
import { useGetSpecialPropertiesQuery } from "@/api/property/queries";
import Loading from "./loading";
import Error from "./error";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Empty from "./empty";
import { Image } from "@/api/property/type";
import { Link } from "react-router-dom";
import NAVIGATION from "@/constants/navigation";

const SpecialPropertiesSlide = () => {
  const { t } = useTranslation();
  const { data, isLoading, isFetching, isError } =
    useGetSpecialPropertiesQuery();

  if (isLoading || isFetching) return <Loading />;
  if (isError) return <Error message={t("common.something-went-wrong")} />;
  if (!!!data.data.properties.length) return <Empty />;
  return (
    <Box
      height={{ xs: 200, sm: 250, md: 350, lg: 400 }}
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
              <Link to={`/${NAVIGATION.MAIN_PAGES.SHOW_PROPERTY(property.id)}`}>
                <Box
                  src={(property.image as Image).media_url}
                  component={"img"}
                  sx={{
                    objectFit: "cover",
                    overflow: "hidden",
                    borderRadius: "1rem",
                  }}
                  width={"100%"}
                  height={"100%"}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Paper>
    </Box>
  );
};

export default SpecialPropertiesSlide;
