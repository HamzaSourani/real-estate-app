import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import { Box } from "@mui/material";
import NAVIGATION from "@/constants/navigation";
import SectionLabel from "@/components/other/sectionLabel";
import ProperCard from "@/components/items/cards/property";
import { useGetChaletsPropertiesQuery } from "@/api/property/queries";
import LoadingPropertiesSlide from "@/components/pages/home/slidesSections/fullBack/loading";
import ErrorPropertiesSlide from "@/components/pages/home/slidesSections/fullBack/error";
import EmptyPropertiesSlide from "@/components/pages/home/slidesSections/fullBack/empty";
const ChaletsSection = () => {
  const { t } = useTranslation();
  const { data, isLoading, isError } = useGetChaletsPropertiesQuery();

  if (isLoading) return <LoadingPropertiesSlide />;
  if (isError)
    return (
      <ErrorPropertiesSlide message={t("pages.home.chalets-section.error")} />
    );
  if (!!!data.data.properties.length)
    return (
      <EmptyPropertiesSlide message={t("pages.home.chalets-section.empty")} />
    );
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
        slidesPerView={"auto"}
        navigation
        style={{ width: "100%", height: "100%" }}
      >
        {data.data.properties.map((property, index) => (
          <SwiperSlide className="slide-section" key={property.id}>
            <ProperCard {...property} queryKey={["get-chalets-properties"]} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ChaletsSection;
