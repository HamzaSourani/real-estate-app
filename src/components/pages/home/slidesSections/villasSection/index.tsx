import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import { Box, alpha } from "@mui/material";
import NAVIGATION from "@/constants/navigation";
import SectionLabel from "@/components/other/sectionLabel";
import ProperCard from "@/components/items/cards/property";
import LoadingPropertiesSlide from "@/components/pages/home/slidesSections/fullBack/loading";
import ErrorPropertiesSlide from "@/components/pages/home/slidesSections/fullBack/error";
import EmptyPropertiesSlide from "@/components/pages/home/slidesSections/fullBack/empty";
import { useGetVillasPropertiesQuery } from "@/api/property/queries";
const VillasSection = () => {
  const { t } = useTranslation();
  const { data, isLoading, isError } = useGetVillasPropertiesQuery();
  if (isLoading) return <LoadingPropertiesSlide isBgColor />;
  if (isError)
    return (
      <ErrorPropertiesSlide message={t("pages.home.villas-section.error")} />
    );
  if (!!!data.data.properties.length)
    return (
      <EmptyPropertiesSlide message={t("pages.home.villas-section.empty")} />
    );
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
        slidesPerView={"auto"}
        navigation
        style={{ width: "100%", height: "100%" }}
      >
        {data.data.properties.map((property, index) => (
          <SwiperSlide className="slide-section" key={property.id}>
            <ProperCard {...property} queryKey={["get-villas-properties"]} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default VillasSection;
